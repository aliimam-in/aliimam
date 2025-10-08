"use client"

import { ScrollProgress } from "@/registry/default/components/scroll-progress"

export default function DemoOne() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border">
      <ScrollProgress
        variant="rainbow"
        size="lg"
        position={"bottom"}
        showPercentage
        percentagePosition="left"
      />
      <div className="py-8 text-center">
        <h1 className="mb-2 text-xl font-semibold">
          The Scroll Progess is showing at bottom
        </h1>
        <p className="text-muted-foreground text-xs">
          Customize the scroll progress component with different variants and
          options
        </p>
      </div>
    </div>
  )
}
