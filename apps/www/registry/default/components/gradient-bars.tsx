"use client"

import React from "react"

import { cn } from "@/registry/default/lib/utils"

interface GradientBarsProps {
  className?: string
  color?: string
  numBars?: number
}

export const GradientBars = ({
  className,
  color = "#fff200",
  numBars = 15,
}: GradientBarsProps) => {
  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1)
    const maxHeight = 100
    const minHeight = 20
    const center = 0.5
    const distanceFromCenter = Math.abs(position - center)
    const heightPercentage = Math.pow(distanceFromCenter * 2, 2)

    return minHeight + (maxHeight - minHeight) * heightPercentage
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="flex h-full w-full">
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars)
          return (
            <div
              key={index}
              style={{
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars})`,
                height: "100%",
                background: `linear-gradient(to top, ${color}, transparent)`,
                transform: `scaleY(${height / 100})`,
                transformOrigin: "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: "pulseBar 2s ease-in-out infinite alternate",
                animationDelay: `${index * 0.1}s`,
                outline: "2px solid rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
