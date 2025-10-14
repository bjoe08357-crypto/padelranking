import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Player slug is required" },
        { status: 400 }
      );
    }

    // Get player with all related data
    const player = await prisma.player.findUnique({
      where: { slug },
      include: {
        region: true,
        club: true,
        rankings: {
          where: {
            season: new Date().getFullYear()
          },
          orderBy: {
            asOf: "desc"
          },
          take: 1
        },
        results: {
          include: {
            tournament: {
              include: {
                region: true,
                club: true
              }
            }
          },
          orderBy: {
            playedAt: "desc"
          },
          take: 10
        }
      }
    });

    if (!player) {
      return NextResponse.json(
        { error: "Player not found" },
        { status: 404 }
      );
    }

    // Get player's ranking history
    const rankingHistory = await prisma.ranking.findMany({
      where: {
        playerId: player.id
      },
      orderBy: {
        asOf: "desc"
      },
      take: 12 // Last 12 months
    });

    // Get head-to-head records
    const headToHead = await prisma.matchResult.groupBy({
      by: ["opponent"],
      where: {
        playerId: player.id,
        status: "COMPLETED"
      },
      _count: {
        id: true
      },
      _sum: {
        pointsEarned: true
      }
    });

    // Calculate win rate
    const totalMatches = player.results.length;
    const wins = player.results.filter(r => r.won).length;
    const winRate = totalMatches > 0 ? (wins / totalMatches) * 100 : 0;

    // Get achievements (tournament wins)
    const achievements = await prisma.matchResult.findMany({
      where: {
        playerId: player.id,
        round: "W", // Winner
        won: true
      },
      include: {
        tournament: {
          include: {
            region: true
          }
        }
      },
      orderBy: {
        playedAt: "desc"
      }
    });

    return NextResponse.json({
      player: {
        ...player,
        winRate: Math.round(winRate * 100) / 100,
        totalMatches,
        wins
      },
      rankingHistory,
      headToHead,
      achievements
    });
  } catch (error) {
    console.error("Error fetching player:", error);
    return NextResponse.json(
      { error: "Failed to fetch player data" },
      { status: 500 }
    );
  }
}
