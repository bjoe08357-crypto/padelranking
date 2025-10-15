import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/utils";

const featuredTournament = {
  id: "sirkuit-indonesia-open-iii-2025",
  name: "Sirkuit Indonesia Open III - 2025",
  startDate: "2025-08-28",
  endDate: "2025-08-31",
  location: "Graha Padel Club, Surabaya, East Java",
  description: "National circuit tournament featuring Men's and Women's Doubles categories with Bronze and Open levels competing for IDR 150 Million in prizes.",
  prizePool: 150000000,
  participants: 64,
  coverUrl: "/tournaments/jakarta-open-2025.svg",
  slug: "sirkuit-indonesia-open-iii-2025"
};

const upcomingTournaments = [
  {
    id: "sirkuit-indonesia-open-2025",
    name: "Sirkuit Indonesia Open 2025",
    startDate: "2025-05-22",
    endDate: "2025-05-25",
    location: "Padel Pro Kemang, Jakarta Selatan",
    participants: 64,
    slug: "sirkuit-indonesia-open-2025"
  },
  {
    id: "fip-bronze-jakarta-2025",
    name: "FIP Bronze Jakarta 2025",
    startDate: "2025-06-05",
    endDate: "2025-06-08",
    location: "Padel Pro Kemang, Jakarta",
    participants: 48,
    slug: "fip-bronze-jakarta-2025"
  },
  {
    id: "sirkuit-indonesia-open-ii-2025",
    name: "Sirkuit Indonesia Open II - 2025",
    startDate: "2025-07-24",
    endDate: "2025-07-27",
    location: "Padel Hill Bandung",
    participants: 56,
    slug: "sirkuit-indonesia-open-ii-2025"
  }
];

export function UpcomingTournaments() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Upcoming Tournaments
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Don't miss out on the exciting padel tournaments happening across Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Featured Tournament */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200">
              <div className="relative h-48 md:h-56 bg-gray-100">
                <Image
                  src={featuredTournament.coverUrl}
                  alt={featuredTournament.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {featuredTournament.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    {formatDate(featuredTournament.startDate)} - {formatDate(featuredTournament.endDate)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    {featuredTournament.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Trophy className="h-4 w-4 mr-2 text-blue-600" />
                    Prize: {formatCurrency(featuredTournament.prizePool)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    {featuredTournament.participants} Participants
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {featuredTournament.description}
                </p>

                <div className="flex space-x-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-sm" size="sm" asChild>
                    <Link href={`/tournaments/${featuredTournament.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tournament List */}
          <div className="space-y-4">
            {upcomingTournaments.map((tournament) => (
              <Card key={tournament.id} className="hover:shadow-md transition-shadow border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base">
                    {tournament.name}
                  </h4>
                  
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center text-xs text-gray-600">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-blue-600" />
                      {formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 text-blue-600" />
                      {tournament.location}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="h-3.5 w-3.5 mr-1.5 text-blue-600" />
                      {tournament.participants} Participants
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs h-8" asChild>
                    <Link href={`/tournaments/${tournament.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View Complete Tournament Calendar */}
        <div className="text-center mt-10">
          <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg" asChild>
            <Link href="/tournaments">
              View Complete Tournament Calendar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
