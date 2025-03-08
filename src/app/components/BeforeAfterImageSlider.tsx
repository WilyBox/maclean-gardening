
"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css"; // Import styles

const projects = [
  {
    before: "/images/1-before.jpg",
    after: "/images/1-after.jpg",
    title: "Backyard Makeover",
    id: 1,
  },
  {
    before: "/images/2-before.jpg",
    after: "/images/2-after.jpg",
    title: "Lawn Restoration",
    id: 2,
  },
  {
    before: "/images/3-before.jpg",
    after: "/images/3-after.jpg",
    title: "Hedge Trimming",
    id: 3,
  },
];

export default function BeforeAfterImageSlider() {
  const [idx, setIdx] = useState(0);
  const projectIndex = idx % projects.length; // Ensure index wraps around

  return (
    <div className="relative h-[500px] w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* Navigation Buttons */}
      <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-4">
        <button
          onClick={() => setIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
          className="bg-black/50 hover:bg-black/60 transition p-3 text-white rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={() => setIdx((prev) => (prev + 1) % projects.length)}
          className="bg-black/50 hover:bg-black/60 transition p-3 text-white rounded-full"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Before/After Slider */}
      <BeforeAfterSlider
  firstImage={{ imageUrl: projects[projectIndex].after }} // ✅ Wrap in an object
  secondImage={{ imageUrl: projects[projectIndex].before }} // ✅ Wrap in an object
  />

      {/* Project Title */}
      <span className="mt-4 bg-white/10 backdrop-blur-md text-white text-lg md:text-xl px-4 py-2 rounded-lg shadow-lg font-semibold">
        {projects[projectIndex].title}
      </span>
    </div>
  );
}
