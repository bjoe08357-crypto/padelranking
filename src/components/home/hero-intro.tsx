import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar } from "lucide-react";

const stats = [
  { label: "Active Members", value: "2,847" },
  { label: "Tournaments This Season", value: "156" },
  { label: "Arief Santoso - Jakarta", value: "#1" },
];

export function HeroIntroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center w-fit px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium shadow-sm mx-auto border border-blue-200">
            Official Rankings System
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Official Padel <span className="text-red-500">Rankings</span> of Indonesia
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover Indonesia&apos;s top padel players, track rankings, and follow the exciting
              journey of our national padel community from Banten to nationwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/rankings">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-6 py-5 h-auto shadow-sm rounded-lg font-semibold">
                <Trophy className="mr-2 h-4 w-4" />
                View Rankings
              </Button>
            </Link>
            <Link href="/tournaments">
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 text-sm px-6 py-5 h-auto rounded-lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Upcoming
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

