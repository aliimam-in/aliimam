"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function GradientWave01() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientWave
        gradientColors={["#e0eaff", "#241d9a", "#f75092", "#9f50d3"]}
      />
      <h1 className="text-black mix-blend-overlay tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
