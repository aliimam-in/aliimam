"use client"

import { ChartArea, Plus } from "@aliimam/icons"

export function Ovservality() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:px-0">
      <div className="bg-background relative w-full border-x border-b">
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -left-4"
        />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -top-4 -right-4"
        />
        <div className="grid">
          <div className="p-10">
            <h1 className="text-muted-foreground lg:text-md flex w-full gap-1 text-sm">
              <ChartArea size={18} />
              Observability
            </h1>
            <h1 className="w-full pt-4 text-sm font-semibold tracking-tight lg:text-2xl">
              Route-aware observability.
            </h1>
            <h1 className="text-muted-foreground w-full max-w-sm text-sm font-medium tracking-tight lg:text-2xl">
              Monitor and analyze the performance and traffic of your projects.
            </h1>
            <div className="lg:-mt-32">
              <img
                className="size-full dark:hidden"
                alt={`Ali's avatar`}
                src={"/pages/analytics-large-light.avif"}
                fetchPriority="high"
              />
              <img
                className="hidden size-full dark:block"
                alt={`Ali's avatar`}
                src={"/pages/analytics-large-dark.avif"}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
