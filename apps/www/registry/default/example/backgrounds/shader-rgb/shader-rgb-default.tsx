"use client"

import { ShaderRGB } from "@/registry/default/components/shader-rgb"

export default function DemoOne() {
  return (
    <div className="relative flex h-[600px] w-5xl flex-col items-center justify-center overflow-hidden rounded-xl border">
      <ShaderRGB />
    </div>
  )
}
