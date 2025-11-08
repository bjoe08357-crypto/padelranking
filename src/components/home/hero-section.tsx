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
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      className="relative min-h-[70vh] overflow-hidden" 
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Image-only hero */}
    </section>
  );
}