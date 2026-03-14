"use client"

import { LiquidWave } from "@/registry/aliimam/components/shaders/liquid-wave"

export default function LiquidWaveDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <LiquidWave
        intensity={20}
        speed={1}
        scale={10}
      />
    </div>
  )
}
