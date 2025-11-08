'use client';
import Image from "next/image";

export function IndonesiaRegionsMap() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Padel Regions of Indonesia</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
}

