"use client"

import { useId } from "react"

import { cn } from "@/registry/aliimam/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[x: number, y: number]>
  strokeDasharray?: string
  className?: string
  variant?: "default" | "small" | "large"
  [key: string]: unknown
}

const variantStyles = {
  default: {
    width: 30,
    height: 30,
    className: "stroke-gray-500/20",
  },
  small: {
    width: 10,
    height: 10,
    className: "stroke-gray-500/30",
  },
  large: {
    width: 60,
    height: 60,
    className: "fill-gray-500/20 stroke-gray-500/25",
  },
}

// <CHANGE> Added variant-specific path generators for different grid patterns
const getPatternPath = (variant: string, width: number, height: number) => {
  switch (variant) {
    default:
      return `M.5 ${height}V.5H${width}`
  }
}

export function GridPattern({
  width,
  height,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  variant = "default",
  ...props
}: GridPatternProps) {
  const id = useId()

  // <CHANGE> Apply variant styles with user overrides
  const variantConfig = variantStyles[variant] || variantStyles.default
  const finalWidth = width ?? variantConfig.width
  const finalHeight = height ?? variantConfig.height
  const finalClassName = cn(
    "pointer-events-none absolute inset-0 h-full w-full",
    variantConfig.className,
    className
  )

  return (
    <svg aria-hidden="true" className={finalClassName} {...props}>
      <defs>
        <pattern
          id={id}
          width={finalWidth}
          height={finalHeight}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={getPatternPath(variant, finalWidth, finalHeight)}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              className="fill-primary/20"
              strokeWidth="0"
              key={`${x}-${y}`}
              width={finalWidth - 1}
              height={finalHeight - 1}
              x={x * finalWidth + 1}
              y={y * finalHeight + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
