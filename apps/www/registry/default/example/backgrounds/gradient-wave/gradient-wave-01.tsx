"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function GradientWave01() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <GradientWave />
      <h1 className="text-black tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
