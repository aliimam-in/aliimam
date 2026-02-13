"use client"

import React, { CSSProperties, useMemo } from "react"

import { cn } from "@/registry/aliimam/lib/utils"

type Orientation = "vertical" | "horizontal"
type AnimationVariant = "pulse" | "wave" | "none"

interface GradientBarsProps {
  className?: string
  numBars?: number

  colors?: string[]
  orientation?: Orientation

  minScale?: number
  maxScale?: number

  animation?: AnimationVariant
  duration?: number
  delayStep?: number
  easing?: string

  ariaHidden?: boolean
}

export function GradientBars({
  className,
  numBars = 15,

  colors = ["#000fff", "transparent"],
  orientation = "vertical",

  minScale = 0.2,
  maxScale = 1,

  animation = "pulse",
  duration = 2,
  delayStep = 0.08,
  easing = "ease-in-out",

  ariaHidden = true,
}: GradientBarsProps) {
  const bars = useMemo(() => Array.from({ length: numBars }), [numBars])

  const gradient = `linear-gradient(${
    orientation === "vertical" ? "to top" : "to right"
  }, ${colors.join(", ")})`

  const getScale = (index: number) => {
    const position = index / (numBars - 1 || 1)
    const distance = Math.abs(position - 0.5)
    const curve = Math.pow(distance * 2, 2)
    return minScale + (maxScale - minScale) * curve
  }

  return (
    <div
      aria-hidden={ariaHidden}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {/* Inline animations */}
      <style>{`
        @keyframes gradient-bar-pulse {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }

        @keyframes gradient-bar-wave {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gradient-bar {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div
        className={cn(
          "flex h-full w-full",
          orientation === "horizontal" && "flex-col"
        )}
      >
        {bars.map((_, index) => {
          const scale = getScale(index)

          const style: CSSProperties = {
            flex: `1 0 ${100 / numBars}%`,
            maxWidth: orientation === "vertical" ? `${100 / numBars}%` : "100%",
            maxHeight:
              orientation === "horizontal" ? `${100 / numBars}%` : "100%",
            background: gradient,
            transform:
              orientation === "vertical"
                ? `scaleY(${scale})`
                : `scaleX(${scale})`,
            transformOrigin: "bottom left",
            transition:
              animation === "none"
                ? undefined
                : `transform ${duration}s ${easing}`,
            animation:
              animation === "pulse"
                ? `gradient-bar-pulse ${duration}s ${easing} infinite alternate`
                : animation === "wave"
                  ? `gradient-bar-wave ${duration}s ${easing} infinite`
                  : undefined,
            animationDelay:
              animation !== "none" ? `${index * delayStep}s` : undefined,
          }

          return <div key={index} className="gradient-bar" style={style} />
        })}
      </div>
    </div>
  )
}
