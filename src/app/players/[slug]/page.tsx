import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Instagram,
  MessageCircle,
  Youtube,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPlayerImageUrl } from "@/lib/utils";

// Mock player data for testing
const mockPlayer = {
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
      result: "WIN" as const,
      score: "6-4, 6-2",
      duration: "45min",
    },
    {
      tournament: "Jakarta Open 2024 - Semifinal",
      opponent: "Rudi Hartono",
      date: "December 20, 2024",
      result: "WIN" as const,
      score: "6-3, 7-5",
      duration: "52min",
    },
    {
      tournament: "Jakarta Open 2024 - Quarterfinal",
      opponent: "Ahmad Fauzi",
      date: "December 19, 2024",
      result: "WIN" as const,
      score: "6-1, 6-3",
      duration: "38min",
    },
    {
      tournament: "National Championship - Final",
      opponent: "Doni Setiawan",
      date: "October 15, 2024",
      result: "WIN" as const,
      score: "6-2, 6-4",
      duration: "50min",
    },
    {
      tournament: "Banten Masters - Semifinal",
      opponent: "Mayo Sari",
      date: "September 28, 2024",
      result: "LOSS" as const,
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
};

// Generate static params for all players
export async function generateStaticParams() {
  return [
    { slug: "zar-lasahido" },
    { slug: "mario-yohakim-prayanto" },
    { slug: "singgih-ario-suselo" },
    { slug: "putu-anandana-adi-guna" },
    { slug: "erwan-wiyono" },
    { slug: "eskar-revilla" },
    { slug: "sunu-wahyu-trijati" },
    { slug: "valentinus-wibawa" },
    { slug: "mike-tanoso" },
    { slug: "giorgio-soemarno" },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return {
    title: `${mockPlayer.name} | Player Profile | Indonesia Padel Rankings`,
    description: `View ${mockPlayer.name}'s profile, statistics, rankings, and match history on the official Indonesia Padel Rankings.`,
  };
}

export default async function PlayerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // For now, return the mock player for any slug
  const player = mockPlayer;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-16 overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Player Image and Info */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto lg:mx-0">
                  <Image
                    src={getPlayerImageUrl(player.name, player.avatar)}
                    alt={player.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Badges */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      {player.tier}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                      #{player.rank} RANKED
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{player.name}</h1>
              <div className="text-lg text-blue-100 mb-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  {player.region}
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Calendar className="h-4 w-4" />
                  {player.age} years old
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Users className="h-4 w-4" />
                  {player.club}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">{player.rating}</div>
                <div className="text-sm text-blue-100">Rating Points</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">{player.winRate}%</div>
                <div className="text-sm text-blue-100">Win Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">{player.matchesPlayed}</div>
                <div className="text-sm text-blue-100">Matches Played</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">{player.titles}</div>
                <div className="text-sm text-blue-100">Titles Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Season Performance */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Season Performance</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Trophy className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{player.seasonStats.tournamentWins}</div>
                    <div className="text-sm text-gray-600">Tournament Wins</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{player.seasonStats.matchesWon}</div>
                    <div className="text-sm text-gray-600">Matches Won</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{player.seasonStats.matchesLost}</div>
                    <div className="text-sm text-gray-600">Matches Lost</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{player.winRate}%</div>
                    <div className="text-sm text-gray-600">Win Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating History Chart */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Rating History</h2>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-600">Rating progression chart will be integrated with PBPI API</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Match Results */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Match Results</h2>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      Win streak: {player.winStreak} matches
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {player.recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {match.result === 'WIN' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium text-gray-900">{match.tournament}</div>
                          <div className="text-sm text-gray-600">vs {match.opponent}</div>
                          <div className="text-xs text-gray-500">{match.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${match.result === 'WIN' ? 'text-green-600' : 'text-red-600'}`}>
                          {match.result}
                        </div>
                        <div className="text-sm text-gray-600">{match.score}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {match.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                    View Complete Match History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Current Rating */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Current Rating</h3>
                <div className="text-4xl font-bold mb-2">{player.rating}</div>
                <div className="text-red-100 mb-4">Rating Points</div>
                <div className="flex items-center text-green-200">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+{player.ratingChange} this month</span>
                </div>
              </CardContent>
            </Card>

            {/* Player Rankings */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Player Rankings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">National Ranking</span>
                    </div>
                    <span className="font-bold text-yellow-600">#{player.rankings.national}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Regional Ranking</span>
                    </div>
                    <span className="font-bold text-blue-600">#{player.rankings.regional}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">Category Ranking</span>
                    </div>
                    <span className="font-bold text-purple-600">#{player.rankings.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Matches Played:</span>
                    <span className="font-semibold">{player.matchesPlayed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tournaments Entered:</span>
                    <span className="font-semibold">{player.tournamentsEntered}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sets Won:</span>
                    <span className="font-semibold">{player.setsWon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sets Lost:</span>
                    <span className="font-semibold">{player.setsLost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points Earned:</span>
                    <span className="font-semibold">{player.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Career Prize Money:</span>
                    <span className="font-semibold">{player.prizeMoney}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connect with Player */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with {player.name.split(' ')[0]}</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Follow his journey and stay updated with latest matches and achievements.
                </p>
                
                <div className="space-y-4">
                  <Link href={player.socialMedia.instagram} className="block">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                      <Instagram className="h-6 w-6 mr-3" />
                      <div>
                        <div className="font-medium">@{player.socialMedia.instagramHandle}</div>
                        <div className="text-sm text-blue-100">{player.socialMedia.instagramFollowers} Followers</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href={player.socialMedia.whatsapp} className="block">
                    <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all">
                      <MessageCircle className="h-6 w-6 mr-3" />
                      <div className="flex-1">
                        <div className="font-medium">Training & Coaching</div>
                        <Button size="sm" className="mt-2 bg-white text-green-600 hover:bg-green-50">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href={player.socialMedia.youtube} className="block">
                    <div className="flex items-center p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all">
                      <Youtube className="h-6 w-6 mr-3" />
                      <div>
                        <div className="font-medium">Training Videos & Tips</div>
                        <div className="text-sm text-red-100">{player.socialMedia.youtubeSubscribers} Subscribers</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}