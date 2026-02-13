"use client"

import { ShineBorder } from "@/registry/aliimam/components/shine-border"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <ShineBorder
        borderRadius={30}
        borderWidth={6}
        duration={30}
        className="h-[400px] w-full px-10"
      >
        <h1 className="text-xl">Shine Border</h1>
      </ShineBorder>
    </div>
  )
}
