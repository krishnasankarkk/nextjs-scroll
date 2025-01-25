"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxTextPage() {
  // Hook to get scroll position
  const { scrollY } = useScroll();

  // Create parallax effects for different text elements
  const text1Y = useTransform(scrollY, [0, 300], [0, -100]);
  const text2Y = useTransform(scrollY, [0, 300], [0, 200]);
  const text3Y = useTransform(scrollY, [0, 900], [0, -500]);

  return (
    <div className="flex flex-col items-center min-h-[200vh] bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 p-4 bg-white shadow-md z-10">
        <h1 className="text-2xl font-bold text-center">Parallax Scroll Effect</h1>
      </div>

      {/* Parallax Text 1 */}
      <motion.h2
        className="text-4xl font-bold text-blue-600 mt-24"
        style={{ y: text1Y }}
      >
        Welcome to the World of Parallax
      </motion.h2>

      {/* Spacer */}
      <div className="h-64"></div>

      {/* Parallax Text 2 */}
      <motion.h2
        className="text-4xl font-bold text-green-600"
        style={{ y: text2Y }}
      >
        Scroll to See the Magic!
      </motion.h2>

      {/* Spacer */}
      <div className="h-64"></div>

      {/* Parallax Text 3 */}
      <motion.h2
        className="text-4xl font-bold text-purple-600"
        style={{ y: text3Y }}
      >
        Framer Motion Makes It Easy
      </motion.h2>
    </div>
  );
}
