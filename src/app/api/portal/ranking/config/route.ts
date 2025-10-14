import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const rankingConfigSchema = z.object({
  season: z.number(),
  rollingWeeks: z.number().default(52),
  bestN: z.number().default(8),
  decayMode: z.string().default("exponential"),
  decayLambda: z.number().default(0.015),
  levelMultipliers: z.record(z.string(), z.number()),
  categoryMultipliers: z.record(z.string(), z.number()).optional(),
  opponentStrengthElo: z.boolean().default(false),
  eloK: z.number().default(16),
  inactivityWeeks: z.number().optional(),
  woPenalty: z.number().default(0),
  retiredPenalty: z.number().default(0),
  dqPenalty: z.number().default(0),
  tiebreakers: z.array(z.string()).default(["TOTAL", "BEST", "RECENT", "H2H"])
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = rankingConfigSchema.parse(body);

    // TODO: Add authentication check for association admin
    // const session = await getServerSession(authOptions);
    // if (!session || session.user.role !== "ASSOC_ADMIN") {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const config = await prisma.rankingConfig.upsert({
      where: {
        season: validatedData.season
      },
      update: validatedData,
      create: validatedData
    });

    return NextResponse.json({ config });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error saving ranking config:", error);
    return NextResponse.json(
      { error: "Failed to save ranking configuration" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const season = parseInt(searchParams.get("season") || new Date().getFullYear().toString());

    const config = await prisma.rankingConfig.findUnique({
      where: { season }
    });

    if (!config) {
      // Return default configuration
      const defaultConfig = {
        season,
        rollingWeeks: 52,
        bestN: 8,
        decayMode: "exponential",
        decayLambda: 0.015,
        levelMultipliers: {
          LOCAL: 1.0,
          REGIONAL: 1.2,
          NATIONAL: 1.5,
          INTERNATIONAL: 2.0
        },
        categoryMultipliers: {},
        opponentStrengthElo: false,
        eloK: 16,
        inactivityWeeks: null,
        woPenalty: 0,
        retiredPenalty: 0,
        dqPenalty: 0,
        tiebreakers: ["TOTAL", "BEST", "RECENT", "H2H"]
      };

      return NextResponse.json({ config: defaultConfig });
    }

    return NextResponse.json({ config });
  } catch (error) {
    console.error("Error fetching ranking config:", error);
    return NextResponse.json(
      { error: "Failed to fetch ranking configuration" },
      { status: 500 }
    );
  }
}
