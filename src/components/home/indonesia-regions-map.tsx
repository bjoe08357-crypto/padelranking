'use client';
import Image from "next/image";
import { useState } from "react";

type Region = {
  id: string;
  name: string;
  // CSS clip-path polygon string in percentages (container-relative)
  clipPath: string;
  // label position (percentages)
  labelLeftPct: number;
  labelTopPct: number;
  color: string;
};

const regions: Region[] = [
  // Clip paths are approximations tuned to a ~960x384 image; adjust as needed.
  {
    id: "sumatra",
    name: "Sumatra",
    clipPath:
      "polygon(6% 18%, 9% 15%, 15% 14%, 20% 16%, 23% 23%, 23% 33%, 21% 41%, 22% 52%, 23% 60%, 18% 61%, 13% 56%, 10% 49%, 8% 40%, 7% 33%)",
    labelLeftPct: 15,
    labelTopPct: 20,
    color: "bg-green-500",
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    clipPath:
      "polygon(40% 15%, 46% 11%, 53% 12%, 58% 17%, 60% 25%, 60% 37%, 57% 43%, 49% 44%, 42% 41%, 39% 33%, 39% 24%)",
    labelLeftPct: 49,
    labelTopPct: 16,
    color: "bg-blue-500",
  },
  {
    id: "sulawesi",
    name: "Sulawesi",
    clipPath:
      "polygon(63% 28%, 67% 24%, 72% 23%, 76% 26%, 77% 31%, 74% 36%, 70% 39%, 67% 36%, 66% 32%)",
    labelLeftPct: 70,
    labelTopPct: 28,
    color: "bg-pink-500",
  },
  {
    id: "maluku",
    name: "Maluku",
    clipPath:
      "polygon(70% 40%, 74% 38%, 80% 40%, 83% 44%, 81% 48%, 76% 49%, 71% 47%)",
    labelLeftPct: 77,
    labelTopPct: 44,
    color: "bg-violet-600",
  },
  {
    id: "papua",
    name: "Papua",
    clipPath:
      "polygon(85% 28%, 90% 26%, 97% 29%, 98% 38%, 98% 56%, 92% 58%, 86% 55%, 85% 46%)",
    labelLeftPct: 92,
    labelTopPct: 29,
    color: "bg-red-500",
  },
  {
    id: "java_bali_nt",
    name: "Java, Bali & Nusa Tenggara",
    clipPath:
      "polygon(25% 63%, 39% 63%, 51% 66%, 61% 68%, 64% 71%, 60% 71%, 45% 69%, 33% 67%, 26% 66%)",
    labelLeftPct: 43,
    labelTopPct: 64,
    color: "bg-yellow-400",
  },
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
          <div className="relative w-full overflow-hidden rounded-xl">
            {/* Base map image */}
            <Image
              src="/maps/indonesia-regions.png"
              alt="Indonesia Regions Map"
              width={960}
              height={384}
              className="w-full h-auto select-none pointer-events-none"
              priority
            />

            {/* Interactive clipped regions */}
            {regions.map((r) => (
              <button
                key={r.id}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered((current) => (current === r.id ? null : current))}
                onFocus={() => setHovered(r.id)}
                onBlur={() => setHovered(null)}
                className="absolute inset-0 outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50 group"
                style={{
                  clipPath: r.clipPath,
                }}
                aria-label={r.name}
                title={r.name}
              >
                {/* The island itself (clipped from the base map) that pops on hover */}
                <div
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{
                    backgroundImage: "url(/maps/indonesia-regions.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: hovered === r.id ? "drop-shadow(0 10px 18px rgba(0,0,0,0.35))" : "none",
                    transform: hovered === r.id ? "scale(1.04)" : "scale(1)",
                  }}
                />
                {/* Subtle tint on hover to emphasize selection */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${r.color} ${hovered === r.id ? "opacity-20" : "opacity-0"}`}
                />
                {/* Pop-up tooltip */}
                <div
                  className={`absolute whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 ${
                    hovered === r.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } ${r.color} bg-opacity-90`}
                  style={{
                    left: `${r.labelLeftPct}%`,
                    top: `${r.labelTopPct}%`,
                    transform: "translate(-50%, -110%)",
                  }}
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

