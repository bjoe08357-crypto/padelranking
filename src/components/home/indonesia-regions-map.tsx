'use client';
import Image from "next/image";
import { useState } from "react";

type Region = {
  id: string;
  name: string;
  // percentages relative to container (0-100)
  leftPct: number;
  topPct: number;
  widthPct: number;
  heightPct: number;
  color: string;
};

const regions: Region[] = [
  // Rough hotspots for the 6 macro regions; tuned for 960x384ish image ratio.
  { id: "sumatra", name: "Sumatra", leftPct: 2, topPct: 18, widthPct: 18, heightPct: 38, color: "bg-green-500" },
  { id: "kalimantan", name: "Kalimantan", leftPct: 37, topPct: 10, widthPct: 21, heightPct: 35, color: "bg-blue-500" },
  { id: "sulawesi", name: "Sulawesi", leftPct: 62, topPct: 24, widthPct: 18, heightPct: 32, color: "bg-pink-500" },
  { id: "maluku", name: "Maluku", leftPct: 69, topPct: 35, widthPct: 18, heightPct: 28, color: "bg-violet-600" },
  { id: "papua", name: "Papua", leftPct: 82, topPct: 22, widthPct: 16, heightPct: 42, color: "bg-red-500" },
  { id: "java_bali_nt", name: "Java, Bali & Nusa Tenggara", leftPct: 23, topPct: 56, widthPct: 34, heightPct: 20, color: "bg-yellow-400" },
];

export function IndonesiaRegionsMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Padel Regions of Indonesia</h2>
            <p className="text-gray-600 mt-2">Hover a region to highlight it and learn more.</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            {/* Base map image */}
            <Image
              src="/maps/indonesia-regions.png"
              alt="Indonesia Regions Map"
              width={960}
              height={384}
              className="w-full h-auto select-none pointer-events-none"
              priority
            />

            {/* Hotspots */}
            {regions.map((r) => (
              <button
                key={r.id}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered((current) => (current === r.id ? null : current))}
                onFocus={() => setHovered(r.id)}
                onBlur={() => setHovered(null)}
                className="absolute rounded-lg outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50 group"
                style={{
                  left: `${r.leftPct}%`,
                  top: `${r.topPct}%`,
                  width: `${r.widthPct}%`,
                  height: `${r.heightPct}%`,
                }}
                aria-label={r.name}
              >
                {/* Visual hover overlay */}
                <div
                  className={`absolute inset-0 ${r.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-lg`}
                />
                {/* Pop-up tooltip */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 ${
                    hovered === r.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } ${r.color} bg-opacity-90`}
                >
                  {r.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

