"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized images

const images = [
  { src: "/images/3-before.webp", id: 1 },
  { src: "/images/3-after.webp", id: 2 },
  { src: "/images/2-before.webp", id: 3 },
  { src: "/images/2-after.webp", id: 4 },
  { src: "/images/1-before.webp", id: 5 },
  { src: "/images/1-after.webp", id: 6 },
];

export default function ModernCarousel() {
  const [idx, setIdx] = useState(0);

  const handleNextImage = () => {
    setIdx((prevIdx) => (prevIdx + 1) % images.length); // Move forward sequentially
  };

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Ensure it runs only on the client
      const nextImage = document.createElement("img"); // ✅ Safe alternative
      nextImage.src = images[(idx + 1) % images.length].src; // Preload next image
    }
  }, [idx]);

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
          <Image
            src={images[idx].src}
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
