"use client"

import { LiquidWave } from "@/registry/aliimam/components/shaders/liquid-wave"

export default function LiquidWaveDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <LiquidWave
        fg="#ff00ff"
        ac="#ff0000"
        acMix={0.6}
        acMode="pattern"
        patternType="bayer8"
      />
    </div>
  )
}
