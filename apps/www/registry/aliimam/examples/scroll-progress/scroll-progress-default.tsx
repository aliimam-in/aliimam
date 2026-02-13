"use client"

import { ScrollProgress } from "@/registry/aliimam/components/scroll-progress"

export default function DemoOne() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden border">
      <ScrollProgress
        variant="rainbow"
        size="lg"
        position={"bottom"}
        showPercentage
        percentagePosition="right"
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
