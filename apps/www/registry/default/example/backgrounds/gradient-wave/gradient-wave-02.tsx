"use client";

import { GradientWave } from "@/registry/default/components/gradient-wave";

export default function HeroSection() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientWave
        colors={["#ffffff", "#fb7185", '#e879f9', "#a3e635", "#ffffff"]}
        shadowPower={4}
        darkenTop={false} 
        noiseFrequency={[0.0001, 0.0002]}
        deform={{ incline: 0.2, noiseAmp: 100, noiseFlow: 2 }}
      />

      <h1 className="text-black tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
