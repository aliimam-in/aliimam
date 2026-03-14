"use client"

import { LiquidWave } from "@/registry/aliimam/components/shaders/liquid-wave"

export default function LiquidWaveDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <LiquidWave
        fg="#00ff00"
        pixelSize={6}
        spread={0.1}
        scale={4}
        threshold={0.8}
      />
    </div>
  )
}
