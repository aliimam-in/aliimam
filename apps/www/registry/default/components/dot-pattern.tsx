"use client"

import { useId } from "react"

import { cn } from "@/registry/default/lib/utils"

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  dotSize?: number
  className?: string
}

function DotPattern({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  cx = 1,
  cy = 0.5,
  dotSize = 0.7,
  className,
  ...props
}: DotPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full rounded-md p-1",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cx}
            cy={cy}
            r={dotSize}
            fill="currentColor"
            opacity={0.5}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export { DotPattern }
