"use client"

import { ButtonRotate } from "@/registry/aliimam/blocks/hero/hero-08/components/button-rotate"
import { Hero } from "@/registry/aliimam/blocks/hero/hero-08/components/hero"
import { GradientBars } from "@/registry/aliimam/components/gradient-bars"

export default function HeroSection() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-y-auto">
      <GradientBars numBars={20} color="var(--primary)" />
      <ButtonRotate />
      <Hero />
    </div>
  )
}
