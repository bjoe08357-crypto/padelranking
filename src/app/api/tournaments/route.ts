import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status");
    const level = searchParams.get("level");
    const category = searchParams.get("category");
    const region = searchParams.get("region");

    const skip = (page - 1) * limit;

    if (slug) {
      // Get single tournament
      const tournament = await prisma.tournament.findUnique({
        where: { slug },
        include: {
          region: true,
          club: true,
          results: {
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
          },
          pointsTable: true
        }
      });

      if (!tournament) {
        return NextResponse.json(
          { error: "Tournament not found" },
          { status: 404 }
        );
      }

      // Group results by round
      const resultsByRound = tournament.results.reduce((acc, result) => {
        if (!acc[result.round]) {
          acc[result.round] = [];
        }
        acc[result.round].push(result);
        return acc;
      }, {} as Record<string, typeof tournament.results>);

      return NextResponse.json({
        tournament: {
          ...tournament,
          resultsByRound
        }
      });
    }

    // Get tournaments list
    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (level) {
      where.level = level;
    }

    if (category) {
      where.category = category;
    }

    if (region) {
      where.regionId = region;
    }

    const [tournaments, total] = await Promise.all([
      prisma.tournament.findMany({
        where,
        include: {
          region: true,
          club: true,
          _count: {
            select: {
              results: true
            }
          }
        },
        orderBy: {
          startDate: "desc"
        },
        skip,
        take: limit
      }),
      prisma.tournament.count({ where })
    ]);

    // Get regions and clubs for filters
    const [regions, clubs] = await Promise.all([
      prisma.region.findMany({
        orderBy: { name: "asc" }
      }),
      prisma.club.findMany({
        orderBy: { name: "asc" }
      })
    ]);

    return NextResponse.json({
      tournaments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      filters: {
        regions,
        clubs,
        levels: ["LOCAL", "REGIONAL", "NATIONAL", "INTERNATIONAL"],
        categories: ["MEN", "WOMEN", "MIXED", "JUNIOR"],
        statuses: ["UPCOMING", "ONGOING", "COMPLETED"]
      }
    });
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return NextResponse.json(
      { error: "Failed to fetch tournaments" },
      { status: 500 }
    );
  }
}
