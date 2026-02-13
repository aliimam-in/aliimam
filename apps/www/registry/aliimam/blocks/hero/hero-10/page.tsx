import { Warp } from "@paper-design/shaders-react"

import { HeroSection } from "@/registry/aliimam/blocks/hero/hero-10/components/hero"

export default function DemoOne() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <HeroSection />
      <div className="absolute h-full w-full overflow-hidden">
        <Warp
          width={1920}
          height={1080}
          colors={["#555", "#000"]}
          proportion={0.24}
          softness={1}
          distortion={0.21}
          swirl={0.57}
          swirlIterations={10}
          shape="edge"
          shapeScale={0.75}
          speed={4.2}
          scale={2}
          className="hidden dark:block"
        />
        <Warp
          width={1920}
          height={1080}
          colors={["#fff", "#555"]}
          proportion={0.24}
          softness={1}
          distortion={0.21}
          swirl={0.57}
          swirlIterations={10}
          shape="edge"
          shapeScale={0.75}
          speed={4.2}
          scale={2}
          className="block dark:hidden"
        />
      </div>
    </div>
  )
}
