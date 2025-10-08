"use client"

import { Awards } from "@/registry/default/components/award"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Awards
        variant="badge"
        title="WINNER"
        subtitle="A Design Award & Competetion"
        recipient="Ali Imam"
        date="June 2025"
        level="gold"
      />
    </div>
  )
}
