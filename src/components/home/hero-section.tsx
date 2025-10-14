import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, User, Calendar } from "lucide-react";

const stats = [
  { label: "Active Members", value: "2,847" },
  { label: "Tournaments This Season", value: "156" },
  { label: "Arief Santoso - Jakarta", value: "#1" },
];

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[70vh] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 overflow-hidden" 
    >
      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center w-fit px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium shadow-lg mx-auto border border-white/30">
            Official Rankings System
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Official Padel{" "}
              <span className="text-yellow-300">Rankings</span>{" "}
              of Indonesia
            </h1>
            
            <p className="text-base md:text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Discover Indonesia's top padel players, track rankings, and follow the exciting journey of our national padel community from Banten to nationwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-sm px-6 py-5 h-auto shadow-lg rounded-lg font-semibold">
              <Trophy className="mr-2 h-4 w-4" />
              View Rankings
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-sm px-6 py-5 h-auto rounded-lg backdrop-blur-sm bg-white/10"
            >
              <User className="mr-2 h-4 w-4" />
              Join Membership
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-sm px-6 py-5 h-auto rounded-lg backdrop-blur-sm bg-white/10"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-50">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}