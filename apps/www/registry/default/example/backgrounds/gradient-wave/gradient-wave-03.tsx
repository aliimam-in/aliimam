"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function HeroSection() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientWave
        colors={["#ffffff", "#000000", "#ffffff", "#000000", "#ffffff", "#000000"]}
        shadowPower={10}  
        noiseSpeed={0.000005} 
        noiseFrequency={[0.00005, 0.0005]}
        deform={{ incline: 2.5, noiseAmp: 50, noiseFlow: 5 }}
      />

      <h1 className="text-white tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
