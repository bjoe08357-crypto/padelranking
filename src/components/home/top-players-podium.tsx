"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Trophy, TrendingUp } from "lucide-react";
import { getPlayerImageUrl } from "@/lib/utils";
import { useState } from "react";

const topPlayers = [
  {
    id: "arief-santoso",
    name: "Arief Santoso",
    location: "Jakarta",
    points: 7847,
    winRate: 89,
    photoUrl: "/players/arief-santoso.svg",
    rank: 1,
    category: "gold"
  },
  {
    id: "sari-dewi",
    name: "Sari Dewi",
    location: "Bandung",
    points: 7034,
    winRate: 83,
    photoUrl: "/players/sari-dewi.svg",
    rank: 2,
    category: "silver"
  },
  {
    id: "budi-prasetyo",
    name: "Budi Prasetyo",
    location: "Surabaya",
    points: 2531,
    winRate: 81,
    photoUrl: "/players/budi-prasetyo.svg",
    rank: 3,
    category: "bronze"
  }
];

const getPodiumClass = (category: string) => {
  switch (category) {
    case "gold":
      return "podium-gold";
    case "silver":
      return "podium-silver";
    case "bronze":
      return "podium-bronze";
    default:
      return "";
  }
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return `#${rank}`;
  }
};

const PlayerAvatar = ({ player }: { player: typeof topPlayers[0] }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <Image
        src={imageError ? getPlayerImageUrl(player.name) : getPlayerImageUrl(player.name, player.photoUrl)}
        alt={player.name}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        unoptimized={imageError}
      />
    </div>
  );
};

export function TopPlayersPodium() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
            <Trophy className="h-4 w-4 mr-2" />
            Top Champions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Top Indonesian Padel Players
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Meet the champions who are leading the Indonesian padel rankings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topPlayers.map((player) => (
            <Card 
              key={player.id} 
              className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${getPodiumClass(player.category)}`}
            >
              <CardContent className="p-6">
                {/* Rank Badge */}
                <div className="text-4xl mb-4">
                  {getRankIcon(player.rank)}
                </div>

                {/* Player Photo */}
                <PlayerAvatar player={player} />

                {/* Player Info */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {player.name}
                </h3>
                
                <div className="flex items-center justify-center text-white/90 mb-4 text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {player.location}
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-4 bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between text-white">
                    <span className="flex items-center text-xs">
                      <Trophy className="h-3.5 w-3.5 mr-1.5" />
                      Points
                    </span>
                    <span className="font-bold text-base">{player.points.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span className="flex items-center text-xs">
                      <TrendingUp className="h-3.5 w-3.5 mr-1.5" />
                      Win Rate
                    </span>
                    <span className="font-bold text-base">{player.winRate}%</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <Button 
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm"
                  asChild
                >
                  <Link href={`/players/${player.id}`}>
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Complete Rankings */}
        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg" asChild>
            <Link href="/rankings">
              View Complete Rankings
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
