'use client';
import { useEffect, useState } from "react";

export function HeroSection() {
  const images = [
    "/documents/padel/homebannernew.jpeg",
    "/documents/padel/homerbanner2.jpeg",
    "/documents/padel/homebanner3.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[1500ms] ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={idx !== currentIndex}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/20 rounded-full px-3 py-2 backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-white ring-2 ring-white/80 scale-110" : "bg-white/60 hover:bg-white/90"}`}
          />
        ))}
      </div>
    </section>
  );
}