import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const recomputeSchema = z.object({
  season: z.number(),
  preview: z.boolean().default(false)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { season, preview } = recomputeSchema.parse(body);

    // TODO: Add authentication check for association admin
    // const session = await getServerSession(authOptions);
    // if (!session || session.user.role !== "ASSOC_ADMIN") {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // Get ranking configuration
    const config = await prisma.rankingConfig.findUnique({
      where: { season }
    });

    if (!config) {
      return NextResponse.json(
        { error: "Ranking configuration not found" },
        { status: 404 }
      );
    }

    // Get all players
    const players = await prisma.player.findMany({
      include: {
        results: {
          where: {
            verified: true,
            playedAt: {
              gte: new Date(Date.now() - config.rollingWeeks * 7 * 24 * 60 * 60 * 1000)
            }
          },
          include: {
            tournament: true
          }
        }
      }
    });

    const rankings = [];

    for (const player of players) {
      // Calculate ranking points based on configuration
      const points = await calculatePlayerPoints(player, config);
      
      rankings.push({
        playerId: player.id,
        season,
        category: player.category,
        points,
        asOf: new Date()
      });
    }

    // Sort by points and assign positions
    rankings.sort((a, b) => b.points - a.points);
    rankings.forEach((ranking, index) => {
      ranking.position = index + 1;
    });

    if (preview) {
      // Return preview without saving
      return NextResponse.json({
        message: "Ranking preview generated",
        rankings: rankings.slice(0, 50), // Top 50 for preview
        totalPlayers: rankings.length
      });
    }

    // Save rankings
    await prisma.$transaction([
      // Delete existing rankings for this season
      prisma.ranking.deleteMany({
        where: { season }
      }),
      // Create new rankings
      ...rankings.map(ranking =>
        prisma.ranking.create({
          data: ranking
        })
      )
    ]);

    return NextResponse.json({
      message: "Rankings recomputed and published successfully",
      totalPlayers: rankings.length
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error recomputing rankings:", error);
    return NextResponse.json(
      { error: "Failed to recompute rankings" },
      { status: 500 }
    );
  }
}

async function calculatePlayerPoints(player: any, config: any): Promise<number> {
  let totalPoints = 0;
  
  // Sort results by points earned (best tournaments first)
  const sortedResults = player.results
    .sort((a: any, b: any) => b.pointsEarned - a.pointsEarned)
    .slice(0, config.bestN);

  for (const result of sortedResults) {
    let points = result.pointsEarned;
    
    // Apply level multiplier
    const levelMultiplier = config.levelMultipliers[result.tournament.level] || 1.0;
    points *= levelMultiplier;
    
    // Apply category multiplier if configured
    if (config.categoryMultipliers && config.categoryMultipliers[player.category]) {
      points *= config.categoryMultipliers[player.category];
    }
    
    // Apply decay based on time
    const weeksSinceMatch = Math.floor(
      (Date.now() - result.playedAt.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );
    
    if (config.decayMode === "exponential") {
      points *= Math.exp(-config.decayLambda * weeksSinceMatch);
    }
    
    totalPoints += points;
  }
  
  return Math.round(totalPoints);
}
