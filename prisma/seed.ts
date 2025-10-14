import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed process...");

  // Create regions
  const regions = await Promise.all([
    prisma.region.upsert({
      where: { code: "JK" },
      update: {},
      create: {
        name: "Jakarta",
        code: "JK"
      }
    }),
    prisma.region.upsert({
      where: { code: "JB" },
      update: {},
      create: {
        name: "West Java",
        code: "JB"
      }
    }),
    prisma.region.upsert({
      where: { code: "JT" },
      update: {},
      create: {
        name: "East Java",
        code: "JT"
      }
    }),
    prisma.region.upsert({
      where: { code: "BA" },
      update: {},
      create: {
        name: "Bali",
        code: "BA"
      }
    }),
    prisma.region.upsert({
      where: { code: "SU" },
      update: {},
      create: {
        name: "North Sumatra",
        code: "SU"
      }
    }),
    prisma.region.upsert({
      where: { code: "SB" },
      update: {},
      create: {
        name: "South Sulawesi",
        code: "SB"
      }
    }),
    prisma.region.upsert({
      where: { code: "YO" },
      update: {},
      create: {
        name: "Yogyakarta",
        code: "YO"
      }
    }),
    prisma.region.upsert({
      where: { code: "OT" },
      update: {},
      create: {
        name: "Other Regions",
        code: "OT"
      }
    })
  ]);

  console.log("✅ Created regions");

  // Create clubs
  const clubs = await Promise.all([
    prisma.club.upsert({
      where: { slug: "jakarta-padel-club" },
      update: {},
      create: {
        slug: "jakarta-padel-club",
        name: "Jakarta Padel Club",
        email: "info@jakartapadelclub.com",
        phone: "+62 21 1234 5678",
        address: "Jl. Sudirman No. 123",
        city: "Jakarta",
        regionId: regions[0].id,
        courts: 4
      }
    }),
    prisma.club.upsert({
      where: { slug: "bandung-elite" },
      update: {},
      create: {
        slug: "bandung-elite",
        name: "Bandung Elite",
        email: "contact@bandungelite.com",
        phone: "+62 22 8765 4321",
        address: "Jl. Dago No. 456",
        city: "Bandung",
        regionId: regions[1].id,
        courts: 3
      }
    }),
    prisma.club.upsert({
      where: { slug: "surabaya-sports" },
      update: {},
      create: {
        slug: "surabaya-sports",
        name: "Surabaya Sports",
        email: "info@surabayasports.com",
        phone: "+62 31 9876 5432",
        address: "Jl. Pemuda No. 789",
        city: "Surabaya",
        regionId: regions[2].id,
        courts: 2
      }
    }),
    prisma.club.upsert({
      where: { slug: "bali-padel-center" },
      update: {},
      create: {
        slug: "bali-padel-center",
        name: "Bali Padel Center",
        email: "hello@balipadelcenter.com",
        phone: "+62 361 1234 567",
        address: "Jl. Sanur No. 321",
        city: "Sanur",
        regionId: regions[3].id,
        courts: 3
      }
    }),
    prisma.club.upsert({
      where: { slug: "medan-champions" },
      update: {},
      create: {
        slug: "medan-champions",
        name: "Medan Champions",
        email: "info@medanchampions.com",
        phone: "+62 61 2345 6789",
        address: "Jl. Gatot Subroto No. 654",
        city: "Medan",
        regionId: regions[4].id,
        courts: 2
      }
    })
  ]);

  console.log("✅ Created clubs");

  // Create players
  const players = await Promise.all([
    prisma.player.upsert({
      where: { slug: "arief-santoso" },
      update: {},
      create: {
        slug: "arief-santoso",
        firstName: "Arief",
        lastName: "Santoso",
        fullName: "Arief Santoso",
        photoUrl: "/players/arief-santoso.svg",
        birthDate: new Date("1990-05-15"),
        regionId: regions[0].id,
        category: "MEN",
        clubId: clubs[0].id
      }
    }),
    prisma.player.upsert({
      where: { slug: "sari-dewi" },
      update: {},
      create: {
        slug: "sari-dewi",
        firstName: "Sari",
        lastName: "Dewi",
        fullName: "Sari Dewi",
        photoUrl: "/players/sari-dewi.svg",
        birthDate: new Date("1992-08-22"),
        regionId: regions[1].id,
        category: "WOMEN",
        clubId: clubs[1].id
      }
    }),
    prisma.player.upsert({
      where: { slug: "budi-prasetyo" },
      update: {},
      create: {
        slug: "budi-prasetyo",
        firstName: "Budi",
        lastName: "Prasetyo",
        fullName: "Budi Prasetyo",
        photoUrl: "/players/budi-prasetyo.svg",
        birthDate: new Date("1988-12-10"),
        regionId: regions[2].id,
        category: "MEN",
        clubId: clubs[2].id
      }
    }),
    prisma.player.upsert({
      where: { slug: "maya-sari" },
      update: {},
      create: {
        slug: "maya-sari",
        firstName: "Maya",
        lastName: "Sari",
        fullName: "Maya Sari",
        photoUrl: "/players/maya-sari.svg",
        birthDate: new Date("1995-03-18"),
        regionId: regions[3].id,
        category: "WOMEN",
        clubId: clubs[3].id
      }
    }),
    prisma.player.upsert({
      where: { slug: "david-wijaya" },
      update: {},
      create: {
        slug: "david-wijaya",
        firstName: "David",
        lastName: "Wijaya",
        fullName: "David Wijaya",
        photoUrl: "/players/david-wijaya.svg",
        birthDate: new Date("1991-07-05"),
        regionId: regions[4].id,
        category: "MEN",
        clubId: clubs[4].id
      }
    })
  ]);

  console.log("✅ Created players");

  // Create points tables
  const pointsTables = await Promise.all([
    prisma.pointsTable.upsert({
      where: { id: "local-men" },
      update: {},
      create: {
        id: "local-men",
        level: "LOCAL",
        category: "MEN",
        r128: 0,
        r64: 1,
        r32: 5,
        r16: 10,
        qf: 20,
        sf: 40,
        f: 70,
        w: 100
      }
    }),
    prisma.pointsTable.upsert({
      where: { id: "regional-men" },
      update: {},
      create: {
        id: "regional-men",
        level: "REGIONAL",
        category: "MEN",
        r128: 0,
        r64: 2,
        r32: 10,
        r16: 20,
        qf: 40,
        sf: 80,
        f: 140,
        w: 200
      }
    }),
    prisma.pointsTable.upsert({
      where: { id: "national-men" },
      update: {},
      create: {
        id: "national-men",
        level: "NATIONAL",
        category: "MEN",
        r128: 0,
        r64: 5,
        r32: 25,
        r16: 50,
        qf: 100,
        sf: 200,
        f: 350,
        w: 500
      }
    })
  ]);

  console.log("✅ Created points tables");

  // Create tournaments
  const tournaments = await Promise.all([
    prisma.tournament.upsert({
      where: { slug: "jakarta-open-championship-2025" },
      update: {},
      create: {
        slug: "jakarta-open-championship-2025",
        name: "Jakarta Open Championship 2025",
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-17"),
        regionId: regions[0].id,
        level: "NATIONAL",
        category: "MEN",
        clubId: clubs[0].id,
        pointsTableId: pointsTables[2].id,
        status: "UPCOMING"
      }
    }),
    prisma.tournament.upsert({
      where: { slug: "manado-regional-championship" },
      update: {},
      create: {
        slug: "manado-regional-championship",
        name: "Manado Regional Championship",
        startDate: new Date("2025-02-20"),
        endDate: new Date("2025-02-22"),
        regionId: regions[5].id,
        level: "REGIONAL",
        category: "MEN",
        pointsTableId: pointsTables[1].id,
        status: "UPCOMING"
      }
    }),
    prisma.tournament.upsert({
      where: { slug: "mantap-padel-open" },
      update: {},
      create: {
        slug: "mantap-padel-open",
        name: "Mantap Padel Open",
        startDate: new Date("2025-02-28"),
        endDate: new Date("2025-03-02"),
        regionId: regions[1].id,
        level: "LOCAL",
        category: "MEN",
        clubId: clubs[1].id,
        pointsTableId: pointsTables[0].id,
        status: "UPCOMING"
      }
    })
  ]);

  console.log("✅ Created tournaments");

  // Create match results
  const matchResults = await Promise.all([
    prisma.matchResult.upsert({
      where: { id: "result-1" },
      update: {},
      create: {
        id: "result-1",
        tournamentId: tournaments[0].id,
        round: "W",
        playerId: players[0].id,
        opponent: "Sari Dewi",
        won: true,
        score: "6-4, 6-2",
        pointsEarned: 500,
        playedAt: new Date("2024-12-15"),
        verified: true,
        status: "COMPLETED"
      }
    }),
    prisma.matchResult.upsert({
      where: { id: "result-2" },
      update: {},
      create: {
        id: "result-2",
        tournamentId: tournaments[0].id,
        round: "F",
        playerId: players[1].id,
        opponent: "Budi Prasetyo",
        won: false,
        score: "4-6, 2-6",
        pointsEarned: 350,
        playedAt: new Date("2024-12-15"),
        verified: true,
        status: "COMPLETED"
      }
    })
  ]);

  console.log("✅ Created match results");

  // Create ranking configuration
  const rankingConfig = await prisma.rankingConfig.upsert({
    where: { season: 2024 },
    update: {},
    create: {
      season: 2024,
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
      woPenalty: 0,
      retiredPenalty: 0,
      dqPenalty: 0,
      tiebreakers: ["TOTAL", "BEST", "RECENT", "H2H"]
    }
  });

  console.log("✅ Created ranking configuration");

  // Create rankings
  const rankings = await Promise.all([
    prisma.ranking.upsert({
      where: { id: "ranking-1" },
      update: {},
      create: {
        id: "ranking-1",
        playerId: players[0].id,
        season: 2024,
        category: "MEN",
        points: 7847,
        position: 1,
        delta: 0,
        asOf: new Date()
      }
    }),
    prisma.ranking.upsert({
      where: { id: "ranking-2" },
      update: {},
      create: {
        id: "ranking-2",
        playerId: players[1].id,
        season: 2024,
        category: "WOMEN",
        points: 7034,
        position: 2,
        delta: 1,
        asOf: new Date()
      }
    }),
    prisma.ranking.upsert({
      where: { id: "ranking-3" },
      update: {},
      create: {
        id: "ranking-3",
        playerId: players[2].id,
        season: 2024,
        category: "MEN",
        points: 2531,
        position: 3,
        delta: -1,
        asOf: new Date()
      }
    })
  ]);

  console.log("✅ Created rankings");

  // Create membership plans
  const membershipPlans = await Promise.all([
    prisma.membershipPlan.upsert({
      where: { name: "Bronze Membership" },
      update: {},
      create: {
        name: "Bronze Membership",
        priceIdr: 500000,
        benefits: [
          "Player profile page",
          "Tournament entry eligibility",
          "Basic ranking visibility",
          "Email support"
        ],
        isActive: true
      }
    }),
    prisma.membershipPlan.upsert({
      where: { name: "Silver Membership" },
      update: {},
      create: {
        name: "Silver Membership",
        priceIdr: 750000,
        benefits: [
          "Everything in Bronze",
          "Advanced statistics",
          "Tournament notifications",
          "Priority support",
          "Club management access"
        ],
        isActive: true
      }
    }),
    prisma.membershipPlan.upsert({
      where: { name: "Gold Membership" },
      update: {},
      create: {
        name: "Gold Membership",
        priceIdr: 1200000,
        benefits: [
          "Everything in Silver",
          "Premium analytics",
          "Custom tournament creation",
          "Direct association contact",
          "Exclusive events access"
        ],
        isActive: true
      }
    })
  ]);

  console.log("✅ Created membership plans");

  // Create news posts
  const newsPosts = await Promise.all([
    prisma.newsPost.upsert({
      where: { slug: "jakarta-open-2024-championship-results" },
      update: {},
      create: {
        slug: "jakarta-open-2024-championship-results",
        title: "Jakarta Open 2024 Championship Results: Historic Victory for Indonesian Padel",
        excerpt: "The Jakarta Open 2024 concluded with record-breaking participation and thrilling matches that showcased the growing talent in Indonesian padel.",
        coverUrl: "/news/jakarta-open-2024.svg",
        content: "The Jakarta Open 2024 championship has concluded with spectacular results that mark a new milestone in Indonesian padel history...",
        published: true,
        publishedAt: new Date("2024-01-15")
      }
    }),
    prisma.newsPost.upsert({
      where: { slug: "manado-regional-championship-2023" },
      update: {},
      create: {
        slug: "manado-regional-championship-2023",
        title: "Manado Regional Championship 2023",
        excerpt: "Northern Sulawesi showcases emerging padel talent",
        content: "The Manado Regional Championship brought together the best players from Northern Sulawesi...",
        published: true,
        publishedAt: new Date("2024-01-10")
      }
    })
  ]);

  console.log("✅ Created news posts");

  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
