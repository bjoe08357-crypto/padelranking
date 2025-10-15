import Image from "next/image";
import Link from "next/link";
import { Search, Download, Filter, ChevronDown, Trophy, TrendingUp, TrendingDown, Minus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock data - will be replaced with real data from database
const topPlayers = [
  {
    rank: 1,
    name: "Arief Santoso",
    region: "Jakarta",
    club: "PB Djarum",
    points: 2847,
    winRate: 68,
    lastActive: "Dec 14",
    trend: "up",
    trendValue: "+12",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Arief Santoso"
  },
  {
    rank: 2,
    name: "Bari Deval",
    region: "Banten",
    club: "Mutiara Club",
    points: 2635,
    winRate: 31,
    lastActive: "Dec 13",
    trend: "down",
    trendValue: "-2",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Bari Deval"
  },
  {
    rank: 3,
    name: "Dedi",
    region: "West Java",
    club: "Jakarta Club",
    points: 2521,
    winRate: 29.2,
    lastActive: "Dec 12",
    trend: "same",
    trendValue: "0",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Dedi"
  }
];

const rankings = [
  {
    rank: 4,
    name: "Rizky Rafi",
    region: "East Java",
    club: "Surabaya Elite",
    points: 2398,
    winRate: 27.6,
    lastActive: "Dec 11",
    trend: "up",
    trendValue: "+3",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rizky Rafi"
  },
  {
    rank: 5,
    name: "Andi Hartono",
    region: "Jakarta",
    club: "Capital Padel",
    points: 2347,
    winRate: 26.8,
    lastActive: "Dec 16",
    trend: "down",
    trendValue: "-1",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Andi Hartono"
  },
  {
    rank: 6,
    name: "Indra Kusuma",
    region: "Bali",
    club: "Island Padel",
    points: 2196,
    winRate: 25.1,
    lastActive: "Dec 15",
    trend: "up",
    trendValue: "+2",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Indra Kusuma"
  },
  {
    rank: 7,
    name: "Ahmad Faizal",
    region: "Medan",
    club: "North Star",
    points: 2024,
    winRate: 23.2,
    lastActive: "Dec 9",
    trend: "same",
    trendValue: "0",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ahmad Faizal"
  },
  {
    rank: 8,
    name: "Omar",
    region: "Central Java",
    club: "Semarang Club",
    points: 1987,
    winRate: 22.8,
    lastActive: "Dec 7",
    trend: "down",
    trendValue: "-3",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Omar"
  }
];

const stats = [
  { label: "Active Players", value: "2,847" },
  { label: "Active Clubs", value: "89" },
  { label: "Tournaments", value: "12" },
  { label: "Current Season", value: "2024" }
];

const categoryDistribution = [
  { category: "Male Open", players: 832, color: "bg-blue-500" },
  { category: "Female Open", players: 421, color: "bg-pink-500" },
  { category: "Mixed Doubles", values: 612, color: "bg-purple-500" },
  { category: "Veterans", players: 289, color: "bg-amber-500" }
];

const topRegions = [
  { name: "Jakarta", players: 1243 },
  { name: "Banten", players: 892 },
  { name: "West Java", players: 756 }
];

const recentActivity = [
  { event: "Tournament ended", details: "Jakarta Open 2024" },
  { event: "3 category promotions", details: "Players moved up" },
  { event: "Rankings updated", details: "December 15, 2024" }
];

const biggestMovers = [
  { name: "Rudi Hartono", change: "+15 ranks", trend: "up", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rudi Hartono" },
  { name: "Maya Sari", change: "+12 ranks", trend: "up", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Maya Sari" },
  { name: "Ahmad Fauzil", change: "-9 ranks", trend: "down", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ahmad Fauzil" }
];

const upcomingMatches = [
  {
    player1: { name: "Arief Santoso", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Arief Santoso" },
    player2: { name: "Bari Deval", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Bari Deval" },
    date: "Dec 18, 2024"
  },
  {
    player1: { name: "Rudi Hartono", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rudi Hartono" },
    player2: { name: "Maya Sari", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Maya Sari" },
    date: "Dec 20, 2024"
  },
  {
    player1: { name: "Rudi Hartono", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rudi Hartono" },
    player2: { name: "Indra Kusuma", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Indra Kusuma" },
    date: "Dec 22, 2024"
  }
];

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-16 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              Official Padel Rankings
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Official Padel <span className="text-red-500">Rankings</span>
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              Indonesia's Premier Padel Circuit Rankings
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Champions Podium */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Top 3 Indonesian Padel Champions
            </h2>
            <p className="text-gray-600">
              Meet the elite athletes leading Indonesia's padel revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
            {/* Silver - 2nd Place */}
            <Card className="overflow-hidden transform md:translate-y-8 border-0 shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="relative h-3 bg-gradient-to-r from-gray-300 to-gray-400"></div>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 mx-auto">
                    <Image
                      src={topPlayers[1].avatar}
                      alt={topPlayers[1].name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{topPlayers[1].name}</h3>
                <p className="text-sm text-gray-600 mb-4">{topPlayers[1].region}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{topPlayers[1].points}</div>
                    <div className="text-xs text-gray-500">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{topPlayers[1].winRate}%</div>
                    <div className="text-xs text-gray-500">Win Rate</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Gold - 1st Place */}
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
              <div className="relative h-3 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Star className="w-12 h-12 text-yellow-500 fill-yellow-400 animate-pulse" />
                </div>
                <div className="relative inline-block mb-4 mt-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 mx-auto shadow-xl">
                    <Image
                      src={topPlayers[0].avatar}
                      alt={topPlayers[0].name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-xl">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{topPlayers[0].name}</h3>
                <p className="text-sm text-gray-700 mb-4">{topPlayers[0].region}</p>
                <div className="flex justify-center gap-6 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{topPlayers[0].points}</div>
                    <div className="text-xs text-gray-600">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{topPlayers[0].winRate}%</div>
                    <div className="text-xs text-gray-600">Win Rate</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold">
                  🏆 View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Bronze - 3rd Place */}
            <Card className="overflow-hidden transform md:translate-y-8 border-0 shadow-xl bg-gradient-to-br from-amber-100 to-orange-200">
              <div className="relative h-3 bg-gradient-to-r from-amber-500 to-orange-600"></div>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-500 mx-auto">
                    <Image
                      src={topPlayers[2].avatar}
                      alt={topPlayers[2].name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{topPlayers[2].name}</h3>
                <p className="text-sm text-gray-600 mb-4">{topPlayers[2].region}</p>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{topPlayers[2].points}</div>
                    <div className="text-xs text-gray-500">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{topPlayers[2].winRate}%</div>
                    <div className="text-xs text-gray-500">Win Rate</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Rankings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Rankings</h2>
            <p className="text-gray-600">View and search through Indonesia's ranked padel players</p>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search players by name or region..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Filters */}
                <div className="flex gap-2 flex-wrap">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Regions</option>
                    <option>Jakarta</option>
                    <option>Banten</option>
                    <option>West Java</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                    <option>Male Open</option>
                    <option>Female Open</option>
                    <option>Mixed Doubles</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>2025 Season</option>
                    <option>2024 Season</option>
                  </select>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Search
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Badges */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
              ✓ Male Open
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300">
              Female Open
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300">
              ⚡ Tournament Winners
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300">
              🏆 Rising Stars
            </button>
          </div>

          {/* Rankings Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
                <div className="col-span-1">Rank</div>
                <div className="col-span-3">Player</div>
                <div className="col-span-2">Region</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-1">Rating</div>
                <div className="col-span-1">Win %</div>
                <div className="col-span-1">Last Active</div>
                <div className="col-span-1"></div>
              </div>
            </div>

            {/* Top 3 Highlight Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
              <div className="flex items-center text-white text-sm font-medium">
                <Trophy className="h-5 w-5 mr-2" />
                🏆 Top 3 Elite Players — Podium Champions
              </div>
            </div>

            {/* Top 3 Rows */}
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className={`px-6 py-4 border-b border-gray-100 ${
                  player.rank === 1
                    ? "bg-gradient-to-r from-yellow-50 to-amber-50"
                    : player.rank === 2
                    ? "bg-gradient-to-r from-gray-50 to-slate-50"
                    : "bg-gradient-to-r from-orange-50 to-amber-50"
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          player.rank === 1
                            ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                            : player.rank === 2
                            ? "bg-gradient-to-br from-gray-300 to-gray-500"
                            : "bg-gradient-to-br from-amber-500 to-orange-600"
                        }`}
                      >
                        {player.rank}
                      </div>
                    </div>
                  </div>

                  {/* Player */}
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                      <Image
                        src={player.avatar}
                        alt={player.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-500">{player.club}</div>
                    </div>
                  </div>

                  {/* Region */}
                  <div className="col-span-2">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-700 text-sm">
                      📍 {player.region}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 text-sm text-gray-700">Male Open</div>

                  {/* Rating */}
                  <div className="col-span-1">
                    <div className="font-bold text-blue-600">{player.points}</div>
                  </div>

                  {/* Win % */}
                  <div className="col-span-1">
                    <div className="text-sm font-medium text-gray-900">{player.winRate}%</div>
                  </div>

                  {/* Last Active */}
                  <div className="col-span-1 text-sm text-gray-600">{player.lastActive}</div>

                  {/* Action */}
                  <div className="col-span-1">
                    <button className="text-blue-600 hover:text-blue-700">
                      <ChevronDown className="h-5 w-5 rotate-270" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="bg-gray-100 px-6 py-2">
              <div className="text-sm text-gray-600 font-medium">
                📊 Summary: 2,844 Players — Complete Rankings
              </div>
            </div>

            {/* Rest of Rankings */}
            {rankings.map((player) => (
              <div
                key={player.rank}
                className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 text-sm">
                        {player.rank}
                      </div>
                    </div>
                  </div>

                  {/* Player */}
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                      <Image
                        src={player.avatar}
                        alt={player.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-500">{player.club}</div>
                    </div>
                  </div>

                  {/* Region */}
                  <div className="col-span-2">
                    <span className="text-sm text-gray-600">📍 {player.region}</span>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 text-sm text-gray-700">
                    <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs">
                      Male Open
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="col-span-1">
                    <div className="font-bold text-gray-900">{player.points}</div>
                  </div>

                  {/* Win % */}
                  <div className="col-span-1">
                    <div className="text-sm text-gray-700">{player.winRate}%</div>
                  </div>

                  {/* Last Active */}
                  <div className="col-span-1 text-sm text-gray-500">{player.lastActive}</div>

                  {/* Trend */}
                  <div className="col-span-1">
                    <div className="flex items-center justify-end">
                      {player.trend === "up" && (
                        <span className="flex items-center text-green-600 text-sm font-medium">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {player.trendValue}
                        </span>
                      )}
                      {player.trend === "down" && (
                        <span className="flex items-center text-red-600 text-sm font-medium">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          {player.trendValue}
                        </span>
                      )}
                      {player.trend === "same" && (
                        <span className="flex items-center text-gray-400 text-sm">
                          <Minus className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">1-10 players</span> — Last updated: September 18, 2025
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-300">
                Previous
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                2
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                3
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                ...
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Insights */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Rankings Insights</h2>
            <p className="text-gray-600">
              Comprehensive statistics and trends from Indonesia's padel community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Category Distribution */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Category Distribution</h3>
                <div className="space-y-4">
                  {categoryDistribution.map((cat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{cat.category}</span>
                        <span className="font-medium text-gray-900">{cat.players} players</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${cat.color} h-2 rounded-full`}
                          style={{ width: `${(cat.players / 832) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Regions */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Regions</h3>
                <div className="space-y-4">
                  {topRegions.map((region, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <span className="font-medium text-gray-900">{region.name}</span>
                      </div>
                      <span className="text-blue-600 font-semibold">{region.players} players</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{activity.event}</div>
                        <div className="text-xs text-gray-500">{activity.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Biggest Movers & Upcoming Matches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
            {/* Biggest Movers */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Biggest Movers This Month</h3>
                <div className="space-y-4">
                  {biggestMovers.map((mover, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                          <Image
                            src={mover.avatar}
                            alt={mover.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{mover.name}</div>
                          <div className="text-xs text-gray-500">Advanced player</div>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-1 font-semibold text-sm ${
                          mover.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {mover.trend === "up" ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {mover.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming High-Stakes Matches */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming High-Stakes Matches</h3>
                <div className="space-y-4">
                  {upcomingMatches.map((match, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                            <Image
                              src={match.player1.avatar}
                              alt={match.player1.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium text-gray-900 text-sm">{match.player1.name}</span>
                        </div>
                        <span className="text-gray-500 font-bold">VS</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-sm">{match.player2.name}</span>
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                            <Image
                              src={match.player2.avatar}
                              alt={match.player2.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-center">{match.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your padel journey and compete with Indonesia's best. Participate in official tournaments and begin climbing the official rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg h-auto">
              📝 Register Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg h-auto">
              📅 View Tournaments
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg h-auto">
              📄 Find Clubs Near You
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Official Padel Rankings | Indonesia Padel Rankings",
  description: "View official padel rankings for Indonesia. Track player statistics, tournament results, and climbing the competitive ladder.",
};

