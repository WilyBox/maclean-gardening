"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized images

const images = [
  { src: "/images/3-before.webp", mobileSrc: "/images/3-before-small.webp", id: 1 },
  { src: "/images/3-after.webp", mobileSrc: "/images/3-after-small.webp", id: 2 },
  { src: "/images/2-before.webp", mobileSrc: "/images/2-before-small.webp", id: 3 },
  { src: "/images/2-after.webp", mobileSrc: "/images/2-after-small.webp", id: 4 },
  { src: "/images/1-before.webp", mobileSrc: "/images/1-before-small.webp", id: 5 },
  { src: "/images/1-after.webp", mobileSrc: "/images/1-after-small.webp", id: 6 },
];

export default function ModernCarousel() {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);

    if (typeof window !== "undefined") {
      checkScreenSize(); // Run on mount
      window.addEventListener("resize", checkScreenSize);
    }

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Immediately preload the next image
  useEffect(() => {
    if (typeof window !== "undefined") {
      const nextIndex = (idx + 1) % images.length;

      // Preload both mobile and desktop versions
      const preloadDesktop = document.createElement("img");
      preloadDesktop.src = images[nextIndex].src;

      const preloadMobile = document.createElement("img");
      preloadMobile.src = images[nextIndex].mobileSrc;
    }
  }, [idx]);

  const handleNextImage = () => {
    setIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-center items-center overflow-hidden cursor-pointer"
      onClick={handleNextImage} // Clicking anywhere advances the image
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[idx].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full rounded-lg overflow-hidden"
        >
          {/* Dynamically choose mobile or desktop image */}
          <Image
            src={isMobile ? images[idx].mobileSrc : images[idx].src}
            alt={`Image ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
            loading="eager"
          />

          {/* Badge to indicate Before/After */}
          <span className="absolute top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-semibold rounded-md backdrop-blur-md shadow-lg bg-black text-white">
            {idx % 2 === 0 ? "Before" : "After"}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Dots (6 total for 6 images) */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, dotIdx) => (
          <div
            key={`dot-${dotIdx}`}
            className={`h-3 w-3 rounded-full transition-all ${
              dotIdx === idx ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
