"use client"

import { PixelGridShader } from "@/registry/aliimam/components/pixelgrid-shader"

export default function PixelShaderDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden border">
      <PixelGridShader shape="plasma" colorFg="#ff00ff" />
    </div>
  )
}
