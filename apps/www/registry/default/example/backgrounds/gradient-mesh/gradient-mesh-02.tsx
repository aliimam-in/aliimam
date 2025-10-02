"use client";

import { GradientMesh } from "@/registry/default/components/gradient-mesh";

export default function GradientMesh02() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientMesh
        colors={["#bcecf6", "#00aaff", "#ffd447"]}
        distortion={8}
        swirl={0.5}
        speed={1} 
        rotation={90}
        waveAmp={0.3}
        waveFreq={20}
        waveSpeed={0.2}
        grain={0.06}
      />
      <h1 className="text-black tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Mesh
      </h1>
    </div>
  );
}
