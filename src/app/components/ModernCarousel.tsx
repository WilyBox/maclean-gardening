"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized images

const projects = [
  {
    before: "/images/3-before.webp",
    after: "/images/3-after.webp",
    id: 1,
  },
  {
    before: "/images/2-before.webp",
    after: "/images/2-after.webp",
    id: 2,
  },
  {
    before: "/images/1-before.webp",
    after: "/images/1-after.webp",
    id: 3,
  },
];

export default function ModernCarousel() {
  const [idx, setIdx] = useState(0);
  const [showBefore, setShowBefore] = useState(true); // Toggles between before & after

  const projectIndex = idx % projects.length;
  const currentProject = projects[projectIndex];

  const handleNextImage = () => {
    if (showBefore) {
      setShowBefore(false); // Show After image
    } else {
      setShowBefore(true); // Show Before image
      setIdx((prev) => (prev + 1) % projects.length); // Move to next project
    }
  };

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-center items-center overflow-hidden cursor-pointer"
      onClick={handleNextImage} // Clicking anywhere advances the image
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={showBefore ? `before-${projectIndex}` : `after-${projectIndex}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full rounded-lg overflow-hidden"
        >
          <Image
            src={showBefore ? currentProject.before : currentProject.after}
            alt={showBefore ? "Before" : "After"}
            fill // ✅ Instead of layout="fill"
            style={{ objectFit: "cover" }} // ✅ Instead of objectFit="cover"
            priority
          />
          {/* Badge to indicate Before/After */}
          <span className={`absolute top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-semibold rounded-md backdrop-blur-md shadow-lg
            ${showBefore ? "bg-black text-white" : "bg-green-700 text-white"}`}>
            {showBefore ? "Before" : "After"}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Dots (6 total for 3 projects × 2 images each) */}
      <div className="absolute bottom-4 flex space-x-2">
        {projects.map((_, projectIdx) => (
          <React.Fragment key={`dots-${projectIdx}`}>
            <div
              key={`dot-before-${projectIdx}`}
              className={`h-3 w-3 rounded-full ${
                projectIdx === projectIndex && showBefore ? "bg-white" : "bg-gray-400"
              }`}
            />
            <div
              key={`dot-after-${projectIdx}`}
              className={`h-3 w-3 rounded-full ${
                projectIdx === projectIndex && !showBefore ? "bg-white" : "bg-gray-400"
              }`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
