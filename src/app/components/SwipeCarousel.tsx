// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";

// const projects = [
//   { before: "/images/1-before.jpg", after: "/images/1-after.jpg" },
//   { before: "/images/2-before.jpg", after: "/images/2-after.jpg" },
//   { before: "/images/3-before.jpg", after: "/images/3-after.jpg" },
// ];

// const AUTO_DELAY = 5000; // 5 seconds
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

// export const SwipeCarousel = () => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const dragX = useMotionValue(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const x = dragX.get();
//       if (x === 0) {
//         setImgIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//       }
//     }, AUTO_DELAY);

//     return () => clearInterval(intervalRef);
//   }, []);

//   const onDragEnd = () => {
//     const x = dragX.get();
//     if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
//       setImgIndex((prev) => prev + 1);
//     } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//       setImgIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto">
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x: dragX }}
//         animate={{ translateX: `-${imgIndex * 100}%` }}
//         transition={SPRING_OPTIONS}
//         onDragEnd={onDragEnd}
//         className="flex cursor-grab items-center active:cursor-grabbing"
//       >
//         {projects.map((project, idx) => (
//           <motion.div
//             key={idx}
//             className="w-full shrink-0 grid grid-cols-2 gap-2 p-2"
//           >
//             <div className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden">
//               <img
//                 src={project.before}
//                 alt="Before"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <span className="absolute bottom-2 left-2 bg-black text-white px-3 py-1 text-sm rounded">
//                 Before
//               </span>
//             </div>
//             <div className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden">
//               <img
//                 src={project.after}
//                 alt="After"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <span className="absolute bottom-2 left-2 bg-green-700 text-white px-3 py-1 text-sm rounded">
//                 After
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Navigation Dots */}
//       <div className="mt-4 flex justify-center gap-2">
//         {projects.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setImgIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               idx === imgIndex ? "bg-green-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
