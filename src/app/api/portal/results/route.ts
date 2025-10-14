import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createResultSchema = z.object({
  tournamentId: z.string(),
  round: z.enum(["R128", "R64", "R32", "R16", "QF", "SF", "F", "W"]),
  playerId: z.string(),
  opponent: z.string(),
  won: z.boolean(),
  score: z.string().optional(),
  pointsEarned: z.number().default(0),
  playedAt: z.string().datetime(),
  status: z.string().default("COMPLETED"),
  notes: z.string().optional()
});

const importResultsSchema = z.object({
  tournamentId: z.string(),
  results: z.array(createResultSchema)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tournamentId, results } = importResultsSchema.parse(body);

    // TODO: Add authentication check for club admin
    // const session = await getServerSession(authOptions);
    // if (!session || session.user.role !== "CLUB_ADMIN") {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // Verify tournament exists and belongs to the club
    const tournament = await prisma.tournament.findUnique({
      where: { id: tournamentId },
      include: { club: true }
    });

    if (!tournament) {
      return NextResponse.json(
        { error: "Tournament not found" },
        { status: 404 }
      );
    }

    // Create results in a transaction
    const createdResults = await prisma.$transaction(
      results.map(result =>
        prisma.matchResult.create({
          data: {
            ...result,
            playedAt: new Date(result.playedAt)
          },
          include: {
            player: {
              include: {
                region: true,
                club: true
              }
            }
          }
        })
      )
    );

    return NextResponse.json({ 
      message: "Results imported successfully",
      results: createdResults 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error importing results:", error);
    return NextResponse.json(
      { error: "Failed to import results" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tournamentId = searchParams.get("tournamentId");

    if (!tournamentId) {
      return NextResponse.json(
        { error: "Tournament ID is required" },
        { status: 400 }
      );
    }

    const results = await prisma.matchResult.findMany({
      where: {
        tournamentId
      },
      include: {
        player: {
          include: {
            region: true,
            club: true
          }
        }
      },
      orderBy: [
        { round: "desc" },
        { playedAt: "desc" }
      ]
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error fetching results:", error);
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}
