import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus, ArrowRight, Medal } from "lucide-react";

const rankingsPreview = [
  {
    id: "zar-lasahido",
    rank: 1,
    name: "Zar Lasahido",
    club: "Jakarta Padel Club",
    region: "DKI Jakarta",
    category: "Men",
    points: 1678,
    delta: 0,
    photoUrl: "/players/zar-lasahido.svg"
  },
  {
    id: "mario-yohakim",
    rank: 2,
    name: "Mario Yohakim Prayanto",
    club: "Bali Elite",
    region: "Bali",
    category: "Men",
    points: 1191.5,
    delta: 1,
    photoUrl: "/players/mario-yohakim.svg"
  },
  {
    id: "singgih-ario",
    rank: 3,
    name: "Singgih Ario Suselo",
    club: "Bali Sports",
    region: "Bali",
    category: "Men",
    points: 907.5,
    delta: -1,
    photoUrl: "/players/singgih-ario.svg"
  },
  {
    id: "putu-anandana",
    rank: 4,
    name: "I Putu Anandana Adi Guna",
    club: "Bali Padel Center",
    region: "Bali",
    category: "Men",
    points: 804,
    delta: 2,
    photoUrl: "/players/putu-anandana.svg"
  },
  {
    id: "erwan-wiyono",
    rank: 5,
    name: "Erwan Wiyono",
    club: "Bali Champions",
    region: "Bali",
    category: "Men",
    points: 684,
    delta: 0,
    photoUrl: "/players/erwan-wiyono.svg"
  }
];

const getDeltaIcon = (delta: number) => {
  if (delta > 0) {
    return <TrendingUp className="h-4 w-4 text-green-400" />;
  } else if (delta < 0) {
    return <TrendingDown className="h-4 w-4 text-red-400" />;
  } else {
    return <Minus className="h-4 w-4 text-gray-400" />;
  }
};

const getDeltaText = (delta: number) => {
  if (delta > 0) {
    return `+${delta}`;
  } else if (delta < 0) {
    return `${delta}`;
  } else {
    return "—";
  }
};

const getRankIcon = (rank: number) => {
  if (rank === 1) {
    return <Medal className="h-5 w-5 text-yellow-400" />;
  } else if (rank === 2) {
    return <Medal className="h-5 w-5 text-gray-300" />;
  } else if (rank === 3) {
    return <Medal className="h-5 w-5 text-orange-400" />;
  }
  return null;
};

export function RankingsPreview() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Medal className="h-4 w-4 mr-2" />
              Current Rankings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Players
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Leading Indonesian padel players based on official PBPI rankings and tournament performance
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            View Complete Rankings
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Card className="bg-white border-gray-200 overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Player
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Province
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Points
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankingsPreview.map((player, index) => (
                    <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            {player.rank}
                          </span>
                          {getRankIcon(player.rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 group-hover:ring-2 group-hover:ring-blue-500 transition-all">
                            <Image
                              src={player.photoUrl}
                              alt={player.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {player.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {player.club}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {player.region}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {player.points.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {getDeltaIcon(player.delta)}
                          <span className="text-sm font-medium text-gray-700">
                            {getDeltaText(player.delta)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Rankings updated daily • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
}