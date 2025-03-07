"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

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

export default function ModernCarousel() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);
  const trend = idx > prevIdx ? 1 : -1;

  const projectIndex = Math.abs(idx % projects.length);

  return (
    <div className="relative h-[500px] w-full max-w-xl mx-auto overflow-hidden">
      {/* Left Navigation Button */}
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => (pv === 0 ? projects.length - 1 : pv - 1));
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/60 transition p-3 text-white rounded-full"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Image Section */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={trend}>
          <motion.div
            key={projects[projectIndex].id}
            variants={carouselVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex justify-center items-center gap-4 w-full h-full"
          >
            {/* Before Image */}
            <div className="relative w-1/2 h-full rounded-lg overflow-hidden max-h-96 lg:max-h-none">
              <img
                src={projects[projectIndex].before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Before Badge - Centered at Top */}
              <span className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-sm font-semibold rounded-md backdrop-blur-md shadow-lg">
                Before
              </span>
            </div>

            {/* After Image */}
            <div className="relative w-1/2 h-full rounded-lg overflow-hidden max-h-96 lg:max-h-none">
              <img
                src={projects[projectIndex].after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* After Badge - Centered at Top */}
              <span className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-2 text-sm font-semibold rounded-md backdrop-blur-md shadow-lg">
                After
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => (pv === projects.length - 1 ? 0 : pv + 1));
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/60 transition p-3 text-white rounded-full"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Project Title */}
      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          key={projects[projectIndex].id}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-lg md:text-xl px-4 py-2 rounded-lg shadow-lg font-semibold"
        >
          {projects[projectIndex].title}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const carouselVariants = {
  initial: (trend: 1 | -1) => ({
    x: trend === 1 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: (trend: 1 | -1) => ({
    x: trend === 1 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.6 },
  }),
};

const titleVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
};
