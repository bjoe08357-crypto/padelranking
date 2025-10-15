import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Trophy, Users, ChevronRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Real tournament data from PBPI
const tournaments = [
  {
    id: "sirkuit-indonesia-open-1",
    title: "Sirkuit Indonesia Open I",
    subtitle: "Professional Padel Tournament",
    date: "January 20-26, 2025",
    location: "Jakarta",
    venue: "SUGBK Padel Club",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    status: "upcoming",
    imageUrl: "/tournaments/sirkuit-indonesia-open-1.webp",
    featured: true,
    registrationDeadline: "January 10, 2025",
    description: "The first tournament of the 2025 Sirkuit Indonesia Open series, featuring top Indonesian padel players competing for ranking points and prizes."
  },
  {
    id: "sirkuit-indonesia-open-2",
    title: "Sirkuit Indonesia Open II",
    subtitle: "Professional Padel Tournament",
    date: "February 17-23, 2025",
    location: "Bali",
    venue: "Bali Padel Club",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    status: "upcoming",
    imageUrl: "/tournaments/sirkuit-indonesia-open-2.webp",
    featured: true,
    registrationDeadline: "February 7, 2025",
    description: "The second leg of the Sirkuit Indonesia Open series takes place in beautiful Bali, bringing together Indonesia's elite padel athletes."
  },
  {
    id: "sirkuit-indonesia-open-3",
    title: "Sirkuit Indonesia Open III",
    subtitle: "Professional Padel Tournament",
    date: "March 17-23, 2025",
    location: "Surabaya",
    venue: "Surabaya Padel Arena",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    status: "upcoming",
    imageUrl: "/tournaments/sirkuit-indonesia-open-3.webp",
    featured: false,
    registrationDeadline: "March 7, 2025",
    description: "The third tournament in the Sirkuit Indonesia Open series, hosted in East Java's largest city."
  },
  {
    id: "fip-bronze-jakarta",
    title: "FIP Bronze Jakarta",
    subtitle: "International Padel Federation Tournament",
    date: "April 7-13, 2025",
    location: "Jakarta",
    venue: "Jakarta International Padel Complex",
    category: "International",
    prizePool: "$15,000 USD",
    participants: "48 teams",
    status: "upcoming",
    imageUrl: "/tournaments/fip-bronze-jakarta.webp",
    featured: true,
    registrationDeadline: "March 28, 2025",
    description: "Indonesia's first FIP Bronze tournament, attracting international players and offering valuable ranking points on the global stage."
  }
];

const stats = [
  { label: "Active Tournaments", value: "4" },
  { label: "Total Prize Pool", value: "Rp 165M+" },
  { label: "Registered Teams", value: "144" },
  { label: "Participating Clubs", value: "28" }
];

export default function TournamentsPage() {
  const featuredTournaments = tournaments.filter(t => t.featured);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/30 backdrop-blur-sm text-white text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              2025 Tournament Season
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indonesian Padel Tournaments
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Compete in official PBPI tournaments, earn ranking points, and showcase your skills against Indonesia's best players.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tournaments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Professional</option>
                <option>International</option>
                <option>Amateur</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Tournaments</h2>
            <p className="text-gray-600">Don't miss these premier padel events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={tournament.imageUrl}
                    alt={tournament.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                      {tournament.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tournament.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tournament.subtitle}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {tournament.location} - {tournament.venue}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Trophy className="h-4 w-4 mr-2 text-blue-600" />
                      {tournament.prizePool}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      {tournament.participants}
                    </div>
                  </div>

                  <Link href={`/tournaments/${tournament.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tournaments */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Upcoming Tournaments</h2>
            <p className="text-gray-600">View the complete 2025 tournament calendar</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={tournament.imageUrl}
                      alt={tournament.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-2 inline-block">
                          {tournament.category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{tournament.title}</h3>
                        <p className="text-gray-600">{tournament.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-700">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <span>{tournament.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <span>{tournament.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Trophy className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <span>{tournament.prizePool}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Users className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <span>{tournament.participants}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{tournament.description}</p>

                    <Link href={`/tournaments/${tournament.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        View Details & Register
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Indonesia's growing padel community and test your skills in official tournaments
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership">
              <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm px-4 py-2">
                Become a Member
              </Button>
            </Link>
            <Link href="/about">
              <Button size="sm" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-sm px-4 py-2 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

