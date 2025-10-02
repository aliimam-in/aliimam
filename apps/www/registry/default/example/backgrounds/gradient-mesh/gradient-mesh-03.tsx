"use client";

import { GradientMesh } from "@/registry/default/components/gradient-mesh";

export default function GradientMesh03() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientMesh
        colors={["#ffffff", "#000000", "#000000"]}
        distortion={3}
        swirl={0.5}
        speed={1} 
        rotation={90}
        waveAmp={0.1}
        waveFreq={7}
        waveSpeed={0.2}
        grain={0.06}
      />
      <h1 className="text-white mix-blend-overlay tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Mesh
      </h1>
    </div>
  );
}
