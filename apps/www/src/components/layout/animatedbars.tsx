"use client";

import { motion } from "framer-motion";

export default function AnimatedBars() {
  return (
    <div className="flex w-auto items-end justify-center py-3">
      <motion.span
        className="mr-[3px] h-2 w-1 rounded-full bg-ali opacity-75"
        animate={{
          transform: [
            "scaleY(1.0) translateY(0rem)",
            "scaleY(1.5) translateY(-0.082rem)",
            "scaleY(1.0) translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.span
        animate={{
          transform: [
            "scaleY(1.0)  translateY(0rem)",
            "scaleY(0.7) translateY(0.2rem)",
            "scaleY(1.0)  translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mr-[3px] h-3 w-1 rounded-full bg-ali opacity-80"
      />
      <motion.span
        animate={{
          transform: [
            "scaleY(1.0)  translateY(0rem)",
            "scaleY(0.5) translateY(0.37rem)",
            "scaleY(1.0)  translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-3 w-1 rounded-full bg-ali opacity-80"
      />
    </div>
  );
}