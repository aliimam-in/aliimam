"use client"

import { PixelShader } from "@/registry/aliimam/components/pixel-shader"

export default function PixelShaderDemo() {
    return (
        <div className="relative border h-full w-full overflow-hidden">
            <PixelShader
                pixelSize={5}
                waveFrequency={100}
                speed={0.3}
                threshold={1}
                grainAmount={0.04}
                gridOpacity={0.8}
                cursorPush={0.2} 
                color="orange"/>
        </div>
    )
}
