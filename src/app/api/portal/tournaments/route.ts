import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createTournamentSchema = z.object({
  name: z.string().min(1),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  regionId: z.string(),
  level: z.enum(["LOCAL", "REGIONAL", "NATIONAL", "INTERNATIONAL"]),
  category: z.enum(["MEN", "WOMEN", "MIXED", "JUNIOR"]),
  clubId: z.string().optional(),
  pointsTableId: z.string().optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createTournamentSchema.parse(body);

    // TODO: Add authentication check for club admin
    // const session = await getServerSession(authOptions);
    // if (!session || session.user.role !== "CLUB_ADMIN") {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const tournament = await prisma.tournament.create({
      data: {
        ...validatedData,
        slug: validatedData.name.toLowerCase().replace(/\s+/g, "-"),
        startDate: new Date(validatedData.startDate),
        endDate: new Date(validatedData.endDate)
      },
      include: {
        region: true,
        club: true
      }
    });

    return NextResponse.json({ tournament });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating tournament:", error);
    return NextResponse.json(
      { error: "Failed to create tournament" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clubId = searchParams.get("clubId");

    if (!clubId) {
      return NextResponse.json(
        { error: "Club ID is required" },
        { status: 400 }
      );
    }

    const tournaments = await prisma.tournament.findMany({
      where: {
        clubId
      },
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
      }
    });

    return NextResponse.json({ tournaments });
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return NextResponse.json(
      { error: "Failed to fetch tournaments" },
      { status: 500 }
    );
  }
}
