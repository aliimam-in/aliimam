"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <GradientWave
        density={[2, 2]}
        amp={200}
        gradientColors={["#ffffff", "#241d9a", "#f75092", "#ffff20"]}
        width="100%"
        height="100%"
      />
      <h1 className="text-white text-4xl mix-blend-overlay tracking-tighter md:text-7xl lg:text-9xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
