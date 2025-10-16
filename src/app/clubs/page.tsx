import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllClubs, getActiveClubs, searchClubs, getClubsByRegion } from "@/lib/data/clubs";
import { PlayerSearch } from "@/components/ui/player-search";

export const metadata: Metadata = {
  title: "Clubs | PadelRanking",
  description: "Discover padel clubs across Indonesia. Find courts, join communities, and connect with local players.",
};

export default function ClubsPage() {
  const clubs = getActiveClubs();
  const regions = Array.from(new Set(clubs.map(club => club.region))).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Padel <span className="text-red-500">Clubs</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover amazing padel clubs across Indonesia. From Jakarta to Bali, 
              find the perfect court for your next game and join vibrant communities of players.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/players" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Find Players
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex-1">
                <PlayerSearch 
                  placeholder="Search clubs by name, city, or region..."
                  className="max-w-md"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Facilities</option>
                  <option>Indoor Courts</option>
                  <option>Outdoor Courts</option>
                  <option>Air Conditioning</option>
                  <option>Restaurant</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Active Clubs ({clubs.length})
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Showing all active clubs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Link 
                  key={club.id} 
                  href={`/clubs/${club.slug}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Club Banner */}
                  <div className="relative h-32 bg-gradient-to-br from-blue-500 to-blue-600">
                    {club.bannerUrl ? (
                      <Image
                        src={club.bannerUrl}
                        alt={`${club.name} banner`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                    )}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-blue-600">
                        {club.status}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Club Logo and Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        {club.logoUrl ? (
                          <Image
                            src={club.logoUrl}
                            alt={`${club.name} logo`}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">
                              {club.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {club.name}
                        </h3>
                        <p className="text-gray-600 text-xs">{club.city}, {club.region}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-xs mb-3 line-clamp-2">
                      {club.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="text-center p-2 bg-gray-50 rounded-md">
                        <div className="text-lg font-bold text-blue-600">{club.courts}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Courts</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-md">
                        <div className="text-lg font-bold text-green-600">{club.memberCount}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Members</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {club.amenities.slice(0, 2).map((amenity, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                        {club.amenities.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{club.amenities.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Est. {club.establishedYear}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{club.city}</span>
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
              Club Statistics Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{clubs.length}</div>
                <div className="text-gray-700 font-semibold">Active Clubs</div>
                <div className="text-sm text-gray-600 mt-1">Across Indonesia</div>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {clubs.reduce((acc, club) => acc + club.courts, 0)}
                </div>
                <div className="text-gray-700 font-semibold">Total Courts</div>
                <div className="text-sm text-gray-600 mt-1">Available for play</div>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {clubs.reduce((acc, club) => acc + club.memberCount, 0)}
                </div>
                <div className="text-gray-700 font-semibold">Total Members</div>
                <div className="text-sm text-gray-600 mt-1">Active players</div>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {regions.length}
                </div>
                <div className="text-gray-700 font-semibold">Regions</div>
                <div className="text-sm text-gray-600 mt-1">Covered areas</div>
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
              Want to Start Your Own Club?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the growing padel community in Indonesia. Apply to become a PBPI member club 
              and start hosting tournaments and building your local padel community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply/club" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Apply as Club
              </Link>
              <Link 
                href="/membership" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
