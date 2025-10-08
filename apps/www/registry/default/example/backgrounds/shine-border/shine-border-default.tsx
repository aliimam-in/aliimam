"use client"

import { ShineBorder } from "@/registry/default/components/shine-border"

export default function DemoOne() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border">
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
