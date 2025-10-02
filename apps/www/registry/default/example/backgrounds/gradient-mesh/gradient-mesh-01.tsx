"use client";

import { GradientMesh } from "@/registry/default/components/gradient-mesh";

export default function GradientMesh01() {
  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <GradientMesh /> 
      <h1 className="text-black mix-blend-overlay tracking-tighter text-7xl font-bold text-center z-10">
         Gradient Mesh
      </h1>
    </div>
  );
}
