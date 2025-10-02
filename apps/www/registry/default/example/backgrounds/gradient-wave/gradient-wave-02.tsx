"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function HeroSection() {
  return (
     <div className="h-full w-full flex items-center justify-center relative">
      <GradientWave
        gradientColors={["#e0eaff", "#241d9a", "#f75092", "#9f50d3"]}
        width="100%"
        height="100%"
      /> 
      <h1 className="text-white text-5xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
