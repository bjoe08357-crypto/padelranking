import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPlayers } from "@/lib/data/players";
import { getPlayerImageUrl } from "@/lib/utils";
import { PlayerSearch } from "@/components/ui/player-search";

export const metadata: Metadata = {
  title: "Players | PadelRanking",
  description: "Discover all professional padel players, their rankings, stats, and achievements.",
};

export default function PlayersPage() {
  const players = getAllPlayers();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional <span className="text-red-500">Players</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover Indonesia's top padel talent. From rising stars to seasoned champions, 
              explore the players who are shaping the future of padel in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/rankings" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Rankings
              </Link>
              <Link 
                href="/tournaments" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Upcoming Tournaments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex-1">
                <PlayerSearch 
                  placeholder="Search players by name, region, or club..."
                  className="max-w-md"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Regions</option>
                  <option>Jakarta</option>
                  <option>Bali</option>
                  <option>Surabaya</option>
                  <option>Bandung</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Sort by Rank</option>
                  <option>Sort by Name</option>
                  <option>Sort by Points</option>
                  <option>Sort by Region</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                All Players ({players.length})
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Showing 1-{players.length} of {players.length} players</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player) => (
                <Link 
                  key={player.slug} 
                  href={`/players/${player.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={getPlayerImageUrl(player.name, player.avatar)}
                          alt={player.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                        <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          #{player.rank}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {player.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{player.region}</p>
                        <p className="text-gray-500 text-sm">{player.club}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{player.rating}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{player.seasonStats.matchesWon}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Wins</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Matches Played:</span>
                        <span className="font-semibold">{player.seasonStats.matchesWon + player.seasonStats.matchesLost}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Win Rate:</span>
                        <span className="font-semibold">{Math.round((player.seasonStats.matchesWon / (player.seasonStats.matchesWon + player.seasonStats.matchesLost)) * 100)}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tournament Wins:</span>
                        <span className="font-semibold">{player.seasonStats.tournamentWins}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Active</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Joined {new Date(player.joinedDate).getFullYear()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Player Statistics Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{players.length}</div>
                <div className="text-gray-700 font-semibold">Total Players</div>
                <div className="text-sm text-gray-600 mt-1">Registered professionals</div>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {players.filter(p => p.rank <= 10).length}
                </div>
                <div className="text-gray-700 font-semibold">Top 10 Players</div>
                <div className="text-sm text-gray-600 mt-1">Elite tier athletes</div>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {new Set(players.map(p => p.region)).size}
                </div>
                <div className="text-gray-700 font-semibold">Regions</div>
                <div className="text-sm text-gray-600 mt-1">Represented areas</div>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {Math.round(players.reduce((acc, p) => {
                    const totalMatches = p.seasonStats.matchesWon + p.seasonStats.matchesLost;
                    return acc + (totalMatches > 0 ? (p.seasonStats.matchesWon / totalMatches) * 100 : 0);
                  }, 0) / players.length)}%
                </div>
                <div className="text-gray-700 font-semibold">Avg Win Rate</div>
                <div className="text-sm text-gray-600 mt-1">Overall performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the Rankings?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Become part of Indonesia's premier padel community. Register for tournaments, 
              track your progress, and climb the rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join PBPI
              </Link>
              <Link 
                href="/tournaments" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Tournaments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
