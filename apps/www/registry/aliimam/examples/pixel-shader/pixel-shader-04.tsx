"use client"

import { PixelShader } from "@/registry/aliimam/components/pixel-shader"

export default function PixelShaderDemo() {
    return (
        <div className="relative border h-full w-full overflow-hidden">      
        <PixelShader 
            pixelSize={10}
            speed={3}
            waveFrequency={1}
            threshold={0.002}
            grainAmount={0.2}
            gridOpacity={0.4}
            cursorRadius={0} 
            color="red"
            />
        </div>
    )
}
