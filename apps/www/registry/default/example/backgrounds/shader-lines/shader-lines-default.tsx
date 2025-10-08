"use client"

import { ShaderLines } from "@/registry/default/components/shader-lines"

export default function DemoOne() {
  return (
    <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border">
      <ShaderLines />
    </div>
  )
}
