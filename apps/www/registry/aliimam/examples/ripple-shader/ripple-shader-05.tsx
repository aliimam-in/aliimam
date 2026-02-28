"use client"

import { RippleShader } from "@/registry/aliimam/components/ripple-shader"

export default function RippleShaderDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <RippleShader
        pixelSize={0.5}
        speed={1.2}
        waveFrequency={2}
        threshold={0.9}
        grainAmount={0.2}
        gridOpacity={0.4}
        cursorRadius={1}
        cursorPush={0.8}
        color="purple"
      />
    </div>
  )
}
