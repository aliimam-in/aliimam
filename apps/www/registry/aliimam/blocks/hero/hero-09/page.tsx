import { Dithering } from "@paper-design/shaders-react"

import { Hero } from "@/registry/aliimam/blocks/hero/hero-09/components/hero"

export default function DemoOne() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-auto">
      <Hero />
      <div className="absolute h-full w-full overflow-hidden">
        <Dithering
          width={1920}
          height={1080}
          colorBack="#ffffff"
          colorFront="#000000"
          shape="wave"
          type="4x4"
          size={1}
          speed={1}
          scale={0.5}
          offsetY={-0.15}
        />
      </div>
    </div>
  )
}
