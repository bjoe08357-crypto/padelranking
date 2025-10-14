import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const region = searchParams.get("region");
    const category = searchParams.get("category");
    const season = parseInt(searchParams.get("season") || new Date().getFullYear().toString());
    const club = searchParams.get("club");
    const search = searchParams.get("search");
    const exportFormat = searchParams.get("export");

    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {
      season,
    };

    if (region) {
      where.player = {
        ...where.player,
        regionId: region
      };
    }

    if (category) {
      where.category = category;
    }

    if (club) {
      where.player = {
        ...where.player,
        clubId: club
      };
    }

    if (search) {
      where.player = {
        ...where.player,
        OR: [
          { firstName: { contains: search, mode: "insensitive" } },
          { lastName: { contains: search, mode: "insensitive" } },
          { fullName: { contains: search, mode: "insensitive" } }
        ]
      };
    }

    // Get rankings with pagination
    const [rankings, total] = await Promise.all([
      prisma.ranking.findMany({
        where,
        include: {
          player: {
            include: {
              region: true,
              club: true
            }
          }
        },
        orderBy: {
          position: "asc"
        },
        skip,
        take: limit
      }),
      prisma.ranking.count({ where })
    ]);

    // If export is requested, return CSV
    if (exportFormat === "csv") {
      const csvData = rankings.map(ranking => ({
        Position: ranking.position,
        Player: ranking.player.fullName,
        Club: ranking.player.club?.name || "N/A",
        Region: ranking.player.region.name,
        Category: ranking.category,
        Points: ranking.points,
        Delta: ranking.delta || 0
      }));

      const csv = [
        Object.keys(csvData[0]).join(","),
        ...csvData.map(row => Object.values(row).join(","))
      ].join("\n");

      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="rankings-${season}.csv"`
        }
      });
    }

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
      rankings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      filters: {
        regions,
        clubs,
        categories: ["MEN", "WOMEN", "MIXED", "JUNIOR"],
        seasons: [new Date().getFullYear(), new Date().getFullYear() - 1]
      }
    });
  } catch (error) {
    console.error("Error fetching rankings:", error);
    return NextResponse.json(
      { error: "Failed to fetch rankings" },
      { status: 500 }
    );
  }
}
