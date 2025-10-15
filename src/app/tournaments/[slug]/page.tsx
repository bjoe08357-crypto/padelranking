import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Trophy, Users, Clock, CheckCircle, AlertCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Tournament detailed data
const tournaments: Record<string, any> = {
  "sirkuit-indonesia-open-1": {
    id: "sirkuit-indonesia-open-1",
    title: "Sirkuit Indonesia Open I",
    subtitle: "Professional Padel Tournament",
    date: "January 20-26, 2025",
    location: "Jakarta",
    venue: "SUGBK Padel Club",
    address: "Jl. Pintu Satu Senayan, Jakarta Pusat 10270",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    registered: "28 teams",
    status: "Open for Registration",
    imageUrl: "/tournaments/sirkuit-indonesia-open-1.jpg",
    registrationDeadline: "January 10, 2025",
    registrationFee: "Rp 500,000 per team",
    fullDescription: "The Sirkuit Indonesia Open I marks the beginning of the 2025 professional padel season in Indonesia. This tournament brings together the nation's top-ranked players competing for valuable ranking points and substantial prize money. As part of the official PBPI circuit, this event follows international padel standards and regulations.",
    schedule: [
      { day: "Day 1-2", date: "Jan 20-21", events: "Qualification Rounds" },
      { day: "Day 3-4", date: "Jan 22-23", events: "Round of 16 & Quarterfinals" },
      { day: "Day 5", date: "Jan 24", events: "Semifinals" },
      { day: "Day 6", date: "Jan 25", events: "Finals & Closing Ceremony" }
    ],
    prizeBreakdown: [
      { position: "1st Place", prize: "Rp 20,000,000" },
      { position: "2nd Place", prize: "Rp 12,000,000" },
      { position: "3rd Place", prize: "Rp 8,000,000" },
      { position: "4th Place", prize: "Rp 5,000,000" },
      { position: "Quarterfinalists", prize: "Rp 1,250,000 each" }
    ],
    registrationRequirements: [
      "Valid PBPI membership for all team members",
      "Minimum combined ranking points of 800",
      "Completed registration form and payment",
      "Medical clearance certificate",
      "Signed tournament agreement"
    ]
  },
  "sirkuit-indonesia-open-2": {
    id: "sirkuit-indonesia-open-2",
    title: "Sirkuit Indonesia Open II",
    subtitle: "Professional Padel Tournament",
    date: "February 17-23, 2025",
    location: "Bali",
    venue: "Bali Padel Club",
    address: "Jl. Sunset Road No. 123, Seminyak, Bali 80361",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    registered: "21 teams",
    status: "Open for Registration",
    imageUrl: "/tournaments/sirkuit-indonesia-open-2.jpg",
    registrationDeadline: "February 7, 2025",
    registrationFee: "Rp 500,000 per team",
    fullDescription: "The second leg of the Sirkuit Indonesia Open takes place in the paradise island of Bali. This tournament continues to attract Indonesia's elite padel athletes competing in world-class facilities. Experience competitive padel in one of the most beautiful locations in Indonesia.",
    schedule: [
      { day: "Day 1-2", date: "Feb 17-18", events: "Qualification Rounds" },
      { day: "Day 3-4", date: "Feb 19-20", events: "Round of 16 & Quarterfinals" },
      { day: "Day 5", date: "Feb 21", events: "Semifinals" },
      { day: "Day 6", date: "Feb 22", events: "Finals & Award Ceremony" }
    ],
    prizeBreakdown: [
      { position: "1st Place", prize: "Rp 20,000,000" },
      { position: "2nd Place", prize: "Rp 12,000,000" },
      { position: "3rd Place", prize: "Rp 8,000,000" },
      { position: "4th Place", prize: "Rp 5,000,000" },
      { position: "Quarterfinalists", prize: "Rp 1,250,000 each" }
    ],
    registrationRequirements: [
      "Valid PBPI membership for all team members",
      "Minimum combined ranking points of 800",
      "Completed registration form and payment",
      "Medical clearance certificate",
      "Signed tournament agreement"
    ]
  },
  "sirkuit-indonesia-open-3": {
    id: "sirkuit-indonesia-open-3",
    title: "Sirkuit Indonesia Open III",
    subtitle: "Professional Padel Tournament",
    date: "March 17-23, 2025",
    location: "Surabaya",
    venue: "Surabaya Padel Arena",
    address: "Jl. HR Muhammad No. 456, Surabaya 60241",
    category: "Professional",
    prizePool: "Rp 50,000,000",
    participants: "32 teams",
    registered: "15 teams",
    status: "Open for Registration",
    imageUrl: "/tournaments/sirkuit-indonesia-open-3.jpg",
    registrationDeadline: "March 7, 2025",
    registrationFee: "Rp 500,000 per team",
    fullDescription: "The third tournament in the Sirkuit Indonesia Open series arrives in Surabaya, East Java's largest city. This event continues the tradition of high-level competitive padel, bringing the excitement to Eastern Indonesia and showcasing the growing padel community nationwide.",
    schedule: [
      { day: "Day 1-2", date: "Mar 17-18", events: "Qualification Rounds" },
      { day: "Day 3-4", date: "Mar 19-20", events: "Round of 16 & Quarterfinals" },
      { day: "Day 5", date: "Mar 21", events: "Semifinals" },
      { day: "Day 6", date: "Mar 22", events: "Finals & Closing Ceremony" }
    ],
    prizeBreakdown: [
      { position: "1st Place", prize: "Rp 20,000,000" },
      { position: "2nd Place", prize: "Rp 12,000,000" },
      { position: "3rd Place", prize: "Rp 8,000,000" },
      { position: "4th Place", prize: "Rp 5,000,000" },
      { position: "Quarterfinalists", prize: "Rp 1,250,000 each" }
    ],
    registrationRequirements: [
      "Valid PBPI membership for all team members",
      "Minimum combined ranking points of 800",
      "Completed registration form and payment",
      "Medical clearance certificate",
      "Signed tournament agreement"
    ]
  },
  "fip-bronze-jakarta": {
    id: "fip-bronze-jakarta",
    title: "FIP Bronze Jakarta",
    subtitle: "International Padel Federation Tournament",
    date: "April 7-13, 2025",
    location: "Jakarta",
    venue: "Jakarta International Padel Complex",
    address: "Jl. Asia Afrika No. 789, Jakarta Selatan 12950",
    category: "International",
    prizePool: "$15,000 USD",
    participants: "48 teams",
    registered: "35 teams",
    status: "Limited Spots Available",
    imageUrl: "/tournaments/fip-bronze-jakarta.jpg",
    registrationDeadline: "March 28, 2025",
    registrationFee: "$200 USD per team",
    fullDescription: "Indonesia's first FIP Bronze tournament represents a historic moment for Indonesian padel. Sanctioned by the International Padel Federation, this event welcomes international players and offers official FIP ranking points. This tournament puts Indonesia on the global padel map and provides local players with invaluable international competition experience.",
    schedule: [
      { day: "Day 1-2", date: "Apr 7-8", events: "Qualification Rounds" },
      { day: "Day 3-4", date: "Apr 9-10", events: "Round of 32 & Round of 16" },
      { day: "Day 5", date: "Apr 11", events: "Quarterfinals" },
      { day: "Day 6", date: "Apr 12", events: "Semifinals" },
      { day: "Day 7", date: "Apr 13", events: "Finals & Award Ceremony" }
    ],
    prizeBreakdown: [
      { position: "1st Place", prize: "$6,000 USD" },
      { position: "2nd Place", prize: "$3,500 USD" },
      { position: "3rd Place", prize: "$2,000 USD" },
      { position: "4th Place", prize: "$1,200 USD" },
      { position: "Quarterfinalists", prize: "$575 USD each" }
    ],
    registrationRequirements: [
      "Valid FIP or national federation membership",
      "International passport (for foreign players)",
      "Minimum FIP ranking or equivalent",
      "Completed online registration and payment",
      "Medical insurance certificate",
      "Signed FIP tournament agreement"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(tournaments).map((slug) => ({
    slug: slug,
  }));
}

export default function TournamentDetailPage({ params }: { params: { slug: string } }) {
  const tournament = tournaments[params.slug];

  if (!tournament) {
    return <div>Tournament not found</div>;
  }

  const registrationProgress = parseInt(tournament.registered) / parseInt(tournament.participants) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <Image
          src={tournament.imageUrl}
          alt={tournament.title}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link href="/tournaments" className="inline-flex items-center text-white hover:text-blue-300 mb-4 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Tournaments
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mb-3">
              {tournament.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {tournament.title}
            </h1>
            <p className="text-xl text-gray-200">{tournament.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Date</div>
                      <div className="text-gray-600">{tournament.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{tournament.venue}</div>
                      <div className="text-sm text-gray-500">{tournament.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Prize Pool</div>
                      <div className="text-gray-600">{tournament.prizePool}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Participants</div>
                      <div className="text-gray-600">{tournament.participants}</div>
                      <div className="text-sm text-gray-500">{tournament.registered} registered</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tournament</h2>
                <p className="text-gray-700 leading-relaxed">{tournament.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tournament Schedule</h2>
                <div className="space-y-3">
                  {tournament.schedule.map((item: any, index: number) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{item.day}</div>
                        <div className="text-sm text-gray-600">{item.date}</div>
                      </div>
                      <div className="text-gray-700">{item.events}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prize Breakdown */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prize Distribution</h2>
                <div className="space-y-2">
                  {tournament.prizeBreakdown.map((item: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Trophy className={`h-5 w-5 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-600' : 'text-blue-600'}`} />
                        <span className="font-semibold text-gray-900">{item.position}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{item.prize}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Requirements</h2>
                <ul className="space-y-3">
                  {tournament.registrationRequirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Registration Status</span>
                    <span className={`text-sm font-semibold ${registrationProgress < 80 ? 'text-green-600' : 'text-orange-600'}`}>
                      {tournament.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${registrationProgress < 80 ? 'bg-green-600' : 'bg-orange-600'}`}
                      style={{ width: `${registrationProgress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    {tournament.registered} of {tournament.participants} registered
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Registration Fee: <strong>{tournament.registrationFee}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Deadline: <strong>{tournament.registrationDeadline}</strong></span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold mb-3 text-base py-6">
                  Register Now
                </Button>

                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold">
                  Download Rules & Regulations
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>Tournament Director:</strong><br />
                    tournaments@pbpi.or.id
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    +62 812 9929 6029
                  </p>
                  <p>
                    <strong>Office Hours:</strong><br />
                    Mon-Fri: 9:00 AM - 5:00 PM WIB
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

