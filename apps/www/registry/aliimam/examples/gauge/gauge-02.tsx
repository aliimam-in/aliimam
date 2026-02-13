"use client"

import { Gauge } from "@/registry/aliimam/components/gauge"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Gauge
        value={81}
        size={200}
        gradient={true}
        primary="success"
        tickMarks={true}
        label="Progress"
        transition={{ length: 1200, delay: 200 }}
      />
    </div>
  )
}
