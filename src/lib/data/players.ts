// Centralized player data service - Future-proof for PBPI API integration
export interface Player {
  // Basic Info
  id: string;
  slug: string;
  name: string;
  region: string;
  age: number;
  club: string;
  avatar?: string;
  
  // Rankings & Stats
  rank: number;
  rating: number;
  winRate: number;
  matchesPlayed: number;
  titles: number;
  tier: string; // PLATINUM, GOLD, SILVER, etc.
  
  // Season Stats
  seasonStats: {
    tournamentWins: number;
    matchesWon: number;
    matchesLost: number;
  };
  
  // Detailed Stats
  tournamentsEntered: number;
  setsWon: number;
  setsLost: number;
  prizeMoney: string;
  ratingChange: number;
  winStreak: number;
  
  // Rankings
  rankings: {
    national: number;
    regional: number;
    category: number;
  };
  
  // Recent Matches
  recentMatches: {
    tournament: string;
    opponent: string;
    date: string;
    result: 'WIN' | 'LOSS';
    score: string;
    duration: string;
  }[];
  
  // Social Media
  socialMedia: {
    instagram: string;
    instagramHandle: string;
    instagramFollowers: string;
    whatsapp: string;
    youtube: string;
    youtubeSubscribers: string;
  };
}

// Mock data - This will be replaced with API calls to PBPI server
const playersData: Player[] = [
  {
    id: "zar-lasahido",
    slug: "zar-lasahido",
    name: "Zar Lasahido",
    region: "Jakarta",
    age: 28,
    club: "Jakarta Padel Club",
    avatar: "/players/zar-lasahido.webp",
    rank: 1,
    rating: 2847,
    winRate: 89,
    matchesPlayed: 38,
    titles: 7,
    tier: "PLATINUM",
    seasonStats: {
      tournamentWins: 7,
      matchesWon: 34,
      matchesLost: 4,
    },
    tournamentsEntered: 12,
    setsWon: 89,
    setsLost: 23,
    prizeMoney: "Rp 89.5M",
    ratingChange: 47,
    winStreak: 7,
    rankings: {
      national: 1,
      regional: 1,
      category: 1,
    },
    recentMatches: [
      {
        tournament: "Jakarta Open 2024 - Final",
        opponent: "Budi Prasetyo",
        date: "December 21, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "45min",
      },
      {
        tournament: "Jakarta Open 2024 - Semifinal",
        opponent: "Rudi Hartono",
        date: "December 20, 2024",
        result: "WIN",
        score: "6-3, 7-5",
        duration: "52min",
      },
      {
        tournament: "Jakarta Open 2024 - Quarterfinal",
        opponent: "Ahmad Fauzi",
        date: "December 19, 2024",
        result: "WIN",
        score: "6-1, 6-3",
        duration: "38min",
      },
      {
        tournament: "National Championship - Final",
        opponent: "Doni Setiawan",
        date: "October 15, 2024",
        result: "WIN",
        score: "6-2, 6-4",
        duration: "50min",
      },
      {
        tournament: "Banten Masters - Semifinal",
        opponent: "Mayo Sari",
        date: "September 28, 2024",
        result: "LOSS",
        score: "4-6, 6-3, 4-6",
        duration: "54min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/zar_padel_official",
      instagramHandle: "zar_padel_official",
      instagramFollowers: "24.5K",
      whatsapp: "https://wa.me/6281234567890",
      youtube: "https://youtube.com/@zarpadel",
      youtubeSubscribers: "12.8K",
    },
  },
  {
    id: "mario-yohakim-prayanto",
    slug: "mario-yohakim-prayanto",
    name: "Mario Yohakim Prayanto",
    region: "Bali",
    age: 26,
    club: "Bali Elite Padel",
    avatar: "/players/mario-yohakim.webp",
    rank: 2,
    rating: 2634,
    winRate: 84,
    matchesPlayed: 37,
    titles: 5,
    tier: "GOLD",
    seasonStats: {
      tournamentWins: 5,
      matchesWon: 31,
      matchesLost: 6,
    },
    tournamentsEntered: 11,
    setsWon: 78,
    setsLost: 28,
    prizeMoney: "Rp 67.2M",
    ratingChange: 23,
    winStreak: 4,
    rankings: {
      national: 2,
      regional: 1,
      category: 2,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Final",
        opponent: "Singgih Ario",
        date: "December 15, 2024",
        result: "WIN",
        score: "6-3, 6-4",
        duration: "48min",
      },
      {
        tournament: "Bali Open 2024 - Semifinal",
        opponent: "Putu Anandana",
        date: "December 14, 2024",
        result: "WIN",
        score: "6-2, 7-5",
        duration: "51min",
      },
      {
        tournament: "Surabaya Masters - Final",
        opponent: "Eskar Revilla",
        date: "November 20, 2024",
        result: "WIN",
        score: "6-1, 6-3",
        duration: "42min",
      },
      {
        tournament: "Jakarta Championship - Semifinal",
        opponent: "Sunu Wahyu",
        date: "October 28, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "46min",
      },
      {
        tournament: "Bandung Open - Quarterfinal",
        opponent: "Valentinus Wibawa",
        date: "September 15, 2024",
        result: "LOSS",
        score: "3-6, 6-4, 2-6",
        duration: "58min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/mario_padel_bali",
      instagramHandle: "mario_padel_bali",
      instagramFollowers: "18.2K",
      whatsapp: "https://wa.me/6281234567891",
      youtube: "https://youtube.com/@mariopadelbali",
      youtubeSubscribers: "8.5K",
    },
  },
  {
    id: "singgih-ario-suselo",
    slug: "singgih-ario-suselo",
    name: "Singgih Ario Suselo",
    region: "Bali",
    age: 29,
    club: "Bali Sports Club",
    avatar: "/players/singgih-ario.svg",
    rank: 3,
    rating: 2521,
    winRate: 81,
    matchesPlayed: 36,
    titles: 4,
    tier: "GOLD",
    seasonStats: {
      tournamentWins: 4,
      matchesWon: 29,
      matchesLost: 7,
    },
    tournamentsEntered: 10,
    setsWon: 72,
    setsLost: 32,
    prizeMoney: "Rp 54.8M",
    ratingChange: 15,
    winStreak: 3,
    rankings: {
      national: 3,
      regional: 2,
      category: 3,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Final",
        opponent: "Mario Yohakim",
        date: "December 15, 2024",
        result: "LOSS",
        score: "3-6, 4-6",
        duration: "48min",
      },
      {
        tournament: "Bali Open 2024 - Semifinal",
        opponent: "Erwan Wiyono",
        date: "December 14, 2024",
        result: "WIN",
        score: "6-2, 6-3",
        duration: "44min",
      },
      {
        tournament: "Denpasar Masters - Final",
        opponent: "Mike Tanoso",
        date: "November 10, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "49min",
      },
      {
        tournament: "Ubud Championship - Semifinal",
        opponent: "Giorgio Soemarno",
        date: "October 5, 2024",
        result: "WIN",
        score: "6-3, 7-5",
        duration: "52min",
      },
      {
        tournament: "Sanur Open - Quarterfinal",
        opponent: "Ahmad Fauzi",
        date: "September 8, 2024",
        result: "LOSS",
        score: "4-6, 6-3, 3-6",
        duration: "61min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/singgih_padel",
      instagramHandle: "singgih_padel",
      instagramFollowers: "15.7K",
      whatsapp: "https://wa.me/6281234567892",
      youtube: "https://youtube.com/@singgihpadel",
      youtubeSubscribers: "6.2K",
    },
  },
  {
    id: "putu-anandana-adi-guna",
    slug: "putu-anandana-adi-guna",
    name: "I Putu Anandana Adi Guna",
    region: "Bali",
    age: 27,
    club: "Bali Padel Center",
    avatar: "/players/putu-anandana.webp",
    rank: 4,
    rating: 2404,
    winRate: 78,
    matchesPlayed: 35,
    titles: 3,
    tier: "SILVER",
    seasonStats: {
      tournamentWins: 3,
      matchesWon: 27,
      matchesLost: 8,
    },
    tournamentsEntered: 9,
    setsWon: 68,
    setsLost: 36,
    prizeMoney: "Rp 42.3M",
    ratingChange: 8,
    winStreak: 2,
    rankings: {
      national: 4,
      regional: 3,
      category: 4,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Semifinal",
        opponent: "Mario Yohakim",
        date: "December 14, 2024",
        result: "LOSS",
        score: "2-6, 5-7",
        duration: "51min",
      },
      {
        tournament: "Bali Open 2024 - Quarterfinal",
        opponent: "Sunu Wahyu",
        date: "December 13, 2024",
        result: "WIN",
        score: "6-3, 6-4",
        duration: "47min",
      },
      {
        tournament: "Canggu Masters - Final",
        opponent: "Valentinus Wibawa",
        date: "November 25, 2024",
        result: "WIN",
        score: "6-2, 6-3",
        duration: "43min",
      },
      {
        tournament: "Seminyak Championship - Semifinal",
        opponent: "Eskar Revilla",
        date: "October 18, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "48min",
      },
      {
        tournament: "Kuta Open - Quarterfinal",
        opponent: "Mike Tanoso",
        date: "September 22, 2024",
        result: "LOSS",
        score: "3-6, 6-4, 2-6",
        duration: "59min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/putu_padel_center",
      instagramHandle: "putu_padel_center",
      instagramFollowers: "12.4K",
      whatsapp: "https://wa.me/6281234567893",
      youtube: "https://youtube.com/@putupadelcenter",
      youtubeSubscribers: "4.8K",
    },
  },
  {
    id: "erwan-wiyono",
    slug: "erwan-wiyono",
    name: "Erwan Wiyono",
    region: "Bali",
    age: 31,
    club: "Bali Champions",
    avatar: "/players/erwan-wiyono.webp",
    rank: 5,
    rating: 2284,
    winRate: 75,
    matchesPlayed: 34,
    titles: 2,
    tier: "SILVER",
    seasonStats: {
      tournamentWins: 2,
      matchesWon: 25,
      matchesLost: 9,
    },
    tournamentsEntered: 8,
    setsWon: 62,
    setsLost: 42,
    prizeMoney: "Rp 35.7M",
    ratingChange: -5,
    winStreak: 1,
    rankings: {
      national: 5,
      regional: 4,
      category: 5,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Semifinal",
        opponent: "Singgih Ario",
        date: "December 14, 2024",
        result: "LOSS",
        score: "2-6, 3-6",
        duration: "44min",
      },
      {
        tournament: "Bali Open 2024 - Quarterfinal",
        opponent: "Giorgio Soemarno",
        date: "December 13, 2024",
        result: "WIN",
        score: "6-2, 6-4",
        duration: "46min",
      },
      {
        tournament: "Jimbaran Masters - Final",
        opponent: "Ahmad Fauzi",
        date: "November 30, 2024",
        result: "WIN",
        score: "6-3, 6-2",
        duration: "45min",
      },
      {
        tournament: "Nusa Dua Championship - Semifinal",
        opponent: "Rudi Hartono",
        date: "October 12, 2024",
        result: "LOSS",
        score: "4-6, 6-3, 3-6",
        duration: "57min",
      },
      {
        tournament: "Tuban Open - Quarterfinal",
        opponent: "Doni Setiawan",
        date: "September 18, 2024",
        result: "LOSS",
        score: "2-6, 6-4, 1-6",
        duration: "63min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/erwan_padel_bali",
      instagramHandle: "erwan_padel_bali",
      instagramFollowers: "9.8K",
      whatsapp: "https://wa.me/6281234567894",
      youtube: "https://youtube.com/@erwanpadelbali",
      youtubeSubscribers: "3.5K",
    },
  },
  {
    id: "eskar-revilla",
    slug: "eskar-revilla",
    name: "Eskar Revilla",
    region: "Bali",
    age: 25,
    club: "Bali Padel Academy",
    avatar: "/players/eskar-revilla.webp",
    rank: 6,
    rating: 2163,
    winRate: 72,
    matchesPlayed: 33,
    titles: 2,
    tier: "SILVER",
    seasonStats: {
      tournamentWins: 2,
      matchesWon: 24,
      matchesLost: 9,
    },
    tournamentsEntered: 7,
    setsWon: 58,
    setsLost: 46,
    prizeMoney: "Rp 28.9M",
    ratingChange: 12,
    winStreak: 3,
    rankings: {
      national: 6,
      regional: 5,
      category: 6,
    },
    recentMatches: [
      {
        tournament: "Surabaya Masters - Final",
        opponent: "Mario Yohakim",
        date: "November 20, 2024",
        result: "LOSS",
        score: "1-6, 3-6",
        duration: "42min",
      },
      {
        tournament: "Surabaya Masters - Semifinal",
        opponent: "Valentinus Wibawa",
        date: "November 19, 2024",
        result: "WIN",
        score: "6-3, 6-4",
        duration: "49min",
      },
      {
        tournament: "Malang Open - Final",
        opponent: "Sunu Wahyu",
        date: "October 30, 2024",
        result: "WIN",
        score: "6-2, 6-3",
        duration: "44min",
      },
      {
        tournament: "Kediri Championship - Semifinal",
        opponent: "Mike Tanoso",
        date: "October 8, 2024",
        result: "LOSS",
        score: "3-6, 6-4, 2-6",
        duration: "58min",
      },
      {
        tournament: "Blitar Open - Quarterfinal",
        opponent: "Giorgio Soemarno",
        date: "September 12, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "47min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/eskar_padel_academy",
      instagramHandle: "eskar_padel_academy",
      instagramFollowers: "7.6K",
      whatsapp: "https://wa.me/6281234567895",
      youtube: "https://youtube.com/@eskarpadelacademy",
      youtubeSubscribers: "2.9K",
    },
  },
  {
    id: "sunu-wahyu-trijati",
    slug: "sunu-wahyu-trijati",
    name: "Sunu Wahyu Trijati",
    region: "Bali",
    age: 28,
    club: "Bali Pro Padel",
    avatar: "/players/sunu-wahyu.webp",
    rank: 7,
    rating: 2031,
    winRate: 69,
    matchesPlayed: 32,
    titles: 1,
    tier: "BRONZE",
    seasonStats: {
      tournamentWins: 1,
      matchesWon: 22,
      matchesLost: 10,
    },
    tournamentsEntered: 6,
    setsWon: 54,
    setsLost: 50,
    prizeMoney: "Rp 22.4M",
    ratingChange: 18,
    winStreak: 2,
    rankings: {
      national: 7,
      regional: 6,
      category: 7,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Quarterfinal",
        opponent: "Putu Anandana",
        date: "December 13, 2024",
        result: "LOSS",
        score: "3-6, 4-6",
        duration: "47min",
      },
      {
        tournament: "Bali Open 2024 - Round of 16",
        opponent: "Ahmad Fauzi",
        date: "December 12, 2024",
        result: "WIN",
        score: "6-2, 6-3",
        duration: "45min",
      },
      {
        tournament: "Malang Open - Final",
        opponent: "Eskar Revilla",
        date: "October 30, 2024",
        result: "LOSS",
        score: "2-6, 3-6",
        duration: "44min",
      },
      {
        tournament: "Malang Open - Semifinal",
        opponent: "Rudi Hartono",
        date: "October 29, 2024",
        result: "WIN",
        score: "6-4, 6-2",
        duration: "48min",
      },
      {
        tournament: "Probolinggo Championship - Quarterfinal",
        opponent: "Doni Setiawan",
        date: "October 2, 2024",
        result: "WIN",
        score: "6-3, 6-4",
        duration: "46min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/sunu_padel_pro",
      instagramHandle: "sunu_padel_pro",
      instagramFollowers: "6.3K",
      whatsapp: "https://wa.me/6281234567896",
      youtube: "https://youtube.com/@sunupadelpro",
      youtubeSubscribers: "2.1K",
    },
  },
  {
    id: "valentinus-wibawa",
    slug: "valentinus-wibawa",
    name: "Valentinus Anak Agung Ngurah Adyasmaka Wibawa",
    region: "Bali",
    age: 30,
    club: "Bali Elite",
    avatar: "/players/valentinus-wibawa.webp",
    rank: 8,
    rating: 1919,
    winRate: 66,
    matchesPlayed: 31,
    titles: 1,
    tier: "BRONZE",
    seasonStats: {
      tournamentWins: 1,
      matchesWon: 20,
      matchesLost: 11,
    },
    tournamentsEntered: 5,
    setsWon: 48,
    setsLost: 56,
    prizeMoney: "Rp 18.7M",
    ratingChange: -8,
    winStreak: 1,
    rankings: {
      national: 8,
      regional: 7,
      category: 8,
    },
    recentMatches: [
      {
        tournament: "Surabaya Masters - Semifinal",
        opponent: "Eskar Revilla",
        date: "November 19, 2024",
        result: "LOSS",
        score: "3-6, 4-6",
        duration: "49min",
      },
      {
        tournament: "Surabaya Masters - Quarterfinal",
        opponent: "Mike Tanoso",
        date: "November 18, 2024",
        result: "WIN",
        score: "6-2, 6-4",
        duration: "47min",
      },
      {
        tournament: "Canggu Masters - Final",
        opponent: "Putu Anandana",
        date: "November 25, 2024",
        result: "LOSS",
        score: "2-6, 3-6",
        duration: "43min",
      },
      {
        tournament: "Canggu Masters - Semifinal",
        opponent: "Giorgio Soemarno",
        date: "November 24, 2024",
        result: "WIN",
        score: "6-3, 6-2",
        duration: "45min",
      },
      {
        tournament: "Sanur Championship - Quarterfinal",
        opponent: "Ahmad Fauzi",
        date: "October 15, 2024",
        result: "LOSS",
        score: "4-6, 6-3, 2-6",
        duration: "59min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/valentinus_padel_elite",
      instagramHandle: "valentinus_padel_elite",
      instagramFollowers: "5.1K",
      whatsapp: "https://wa.me/6281234567897",
      youtube: "https://youtube.com/@valentinuspadel",
      youtubeSubscribers: "1.8K",
    },
  },
  {
    id: "mike-tanoso",
    slug: "mike-tanoso",
    name: "Mike Tanoso",
    region: "DKI Jakarta",
    age: 26,
    club: "Jakarta Padel Pro",
    avatar: "/players/mike-tanoso.webp",
    rank: 9,
    rating: 1864,
    winRate: 63,
    matchesPlayed: 30,
    titles: 1,
    tier: "BRONZE",
    seasonStats: {
      tournamentWins: 1,
      matchesWon: 19,
      matchesLost: 11,
    },
    tournamentsEntered: 4,
    setsWon: 45,
    setsLost: 59,
    prizeMoney: "Rp 15.2M",
    ratingChange: 22,
    winStreak: 2,
    rankings: {
      national: 9,
      regional: 1,
      category: 9,
    },
    recentMatches: [
      {
        tournament: "Surabaya Masters - Quarterfinal",
        opponent: "Valentinus Wibawa",
        date: "November 18, 2024",
        result: "LOSS",
        score: "2-6, 4-6",
        duration: "47min",
      },
      {
        tournament: "Surabaya Masters - Round of 16",
        opponent: "Rudi Hartono",
        date: "November 17, 2024",
        result: "WIN",
        score: "6-3, 6-2",
        duration: "44min",
      },
      {
        tournament: "Denpasar Masters - Final",
        opponent: "Singgih Ario",
        date: "November 10, 2024",
        result: "LOSS",
        score: "4-6, 2-6",
        duration: "49min",
      },
      {
        tournament: "Denpasar Masters - Semifinal",
        opponent: "Doni Setiawan",
        date: "November 9, 2024",
        result: "WIN",
        score: "6-4, 6-3",
        duration: "48min",
      },
      {
        tournament: "Jakarta Championship - Quarterfinal",
        opponent: "Ahmad Fauzi",
        date: "October 28, 2024",
        result: "WIN",
        score: "6-2, 6-4",
        duration: "46min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/mike_padel_jakarta",
      instagramHandle: "mike_padel_jakarta",
      instagramFollowers: "4.7K",
      whatsapp: "https://wa.me/6281234567898",
      youtube: "https://youtube.com/@mikepadeljakarta",
      youtubeSubscribers: "1.5K",
    },
  },
  {
    id: "giorgio-soemarno",
    slug: "giorgio-soemarno",
    name: "Giorgio Soemarno",
    region: "DKI Jakarta",
    age: 24,
    club: "Jakarta Elite Padel",
    avatar: "/players/giorgio-soemarno.svg",
    rank: 10,
    rating: 1737,
    winRate: 60,
    matchesPlayed: 29,
    titles: 0,
    tier: "BRONZE",
    seasonStats: {
      tournamentWins: 0,
      matchesWon: 17,
      matchesLost: 12,
    },
    tournamentsEntered: 3,
    setsWon: 42,
    setsLost: 62,
    prizeMoney: "Rp 12.8M",
    ratingChange: 5,
    winStreak: 1,
    rankings: {
      national: 10,
      regional: 2,
      category: 10,
    },
    recentMatches: [
      {
        tournament: "Bali Open 2024 - Quarterfinal",
        opponent: "Erwan Wiyono",
        date: "December 13, 2024",
        result: "LOSS",
        score: "2-6, 4-6",
        duration: "46min",
      },
      {
        tournament: "Bali Open 2024 - Round of 16",
        opponent: "Ahmad Fauzi",
        date: "December 12, 2024",
        result: "WIN",
        score: "6-3, 6-2",
        duration: "44min",
      },
      {
        tournament: "Ubud Championship - Semifinal",
        opponent: "Singgih Ario",
        date: "October 5, 2024",
        result: "LOSS",
        score: "3-6, 5-7",
        duration: "52min",
      },
      {
        tournament: "Ubud Championship - Quarterfinal",
        opponent: "Rudi Hartono",
        date: "October 4, 2024",
        result: "WIN",
        score: "6-4, 6-3",
        duration: "47min",
      },
      {
        tournament: "Canggu Masters - Semifinal",
        opponent: "Valentinus Wibawa",
        date: "November 24, 2024",
        result: "LOSS",
        score: "2-6, 3-6",
        duration: "45min",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/giorgio_padel_elite",
      instagramHandle: "giorgio_padel_elite",
      instagramFollowers: "3.9K",
      whatsapp: "https://wa.me/6281234567899",
      youtube: "https://youtube.com/@giorgiopadel",
      youtubeSubscribers: "1.2K",
    },
  },
];

// API-like functions for future integration
export function getAllPlayers(): Player[] {
  // Future: Replace with API call to PBPI server
  // return await fetch('/api/players').then(res => res.json());
  return playersData;
}

export function getPlayerBySlug(slug: string): Player | null {
  // Future: Replace with API call to PBPI server
  // return await fetch(`/api/players/${slug}`).then(res => res.json());
  return playersData.find(player => player.slug === slug) || null;
}

export function getPlayerById(id: string): Player | null {
  // Future: Replace with API call to PBPI server
  // return await fetch(`/api/players/${id}`).then(res => res.json());
  return playersData.find(player => player.id === id) || null;
}

export function getTopPlayers(limit: number = 10): Player[] {
  // Future: Replace with API call to PBPI server
  // return await fetch(`/api/players/top?limit=${limit}`).then(res => res.json());
  return playersData
    .sort((a, b) => a.rank - b.rank)
    .slice(0, limit);
}

export function getPlayersByRegion(region: string): Player[] {
  // Future: Replace with API call to PBPI server
  // return await fetch(`/api/players?region=${region}`).then(res => res.json());
  return playersData.filter(player => player.region === region);
}

export function getPlayersByClub(club: string): Player[] {
  // Future: Replace with API call to PBPI server
  // return await fetch(`/api/players?club=${club}`).then(res => res.json());
  return playersData.filter(player => player.club === club);
}

// Future API integration helper
export class PlayerAPIService {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://api.pbpi.or.id') {
    this.baseUrl = baseUrl;
  }
  
  // Future methods for API integration
  async fetchAllPlayers(): Promise<Player[]> {
    // Implementation for fetching from PBPI API
    throw new Error('API integration not implemented yet');
  }
  
  async fetchPlayerBySlug(slug: string): Promise<Player | null> {
    // Implementation for fetching single player from PBPI API
    throw new Error('API integration not implemented yet');
  }
  
  async fetchPlayerStats(playerId: string): Promise<any> {
    // Implementation for fetching detailed stats from PBPI API
    throw new Error('API integration not implemented yet');
  }
  
  async fetchPlayerMatches(playerId: string): Promise<any[]> {
    // Implementation for fetching match history from PBPI API
    throw new Error('API integration not implemented yet');
  }
}
