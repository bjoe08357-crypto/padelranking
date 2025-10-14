import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get basic statistics
    const [
      totalPlayers,
      totalClubs,
      totalTournaments,
      totalPoints,
      recentNews
    ] = await Promise.all([
      prisma.player.count(),
      prisma.club.count(),
      prisma.tournament.count({
        where: {
          startDate: {
            gte: new Date(new Date().getFullYear(), 0, 1) // This year
          }
        }
      }),
      prisma.ranking.aggregate({
        _sum: {
          points: true
        }
      }),
      prisma.newsPost.findMany({
        where: {
          published: true
        },
        orderBy: {
          publishedAt: 'desc'
        },
        take: 3
      })
    ]);

    // Get regional distribution
    const regionalStats = await prisma.player.groupBy({
      by: ['regionId'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      }
    });

    // Get category distribution
    const categoryStats = await prisma.player.groupBy({
      by: ['category'],
      _count: {
        id: true
      }
    });

    // Get top players
    const topPlayers = await prisma.ranking.findMany({
      where: {
        season: new Date().getFullYear(),
        position: {
          lte: 5
        }
      },
      include: {
        player: {
          include: {
            region: true,
            club: true
          }
        }
      },
      orderBy: {
        position: 'asc'
      }
    });

    return NextResponse.json({
      stats: {
        totalPlayers,
        totalClubs,
        totalTournaments,
        totalPoints: totalPoints._sum.points || 0
      },
      regionalDistribution: regionalStats,
      categoryDistribution: categoryStats,
      topPlayers,
      recentNews
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}
