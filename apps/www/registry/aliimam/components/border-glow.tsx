"use client"

import React from "react"

import { cn } from "@/registry/aliimam/lib/utils"

export interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode

  width?: string
  height?: string
  aspectRatio?: string

  animationDuration?: number
  rotationDirection?: "normal" | "reverse"
  paused?: boolean
  hoverOnly?: boolean

  gradientType?: "conic" | "radial" | "linear"
  gradientColors?: string[]
  colorPreset?:
    | "nature"
    | "ocean"
    | "sunset"
    | "aurora"
    | "neon"
    | "fire"
    | "ice"
    | "royal"
    | "cyberpunk"
    | "pastel"
    | "custom"

  glowIntensity?: number
  borderWidth?: string
  blurAmount?: string
  inset?: string
  glowSpread?: string
  innerGlow?: boolean

  backgroundColor?: string
}

const colorPresets: Record<string, string[]> = {
  nature: [
    "#669900",
    "#88bb22",
    "#99cc33",
    "#aaddaa",
    "#ccee66",
    "#006699",
    "#228888",
    "#3399cc",
    "#55aacc",
    "#669900",
  ],
  ocean: [
    "#006699",
    "#1177aa",
    "#2288bb",
    "#3399cc",
    "#44aadd",
    "#55bbee",
    "#66ccff",
    "#44bbee",
    "#2299cc",
    "#006699",
  ],
  sunset: [
    "#ff6600",
    "#ff7711",
    "#ff8822",
    "#ff9900",
    "#ffaa22",
    "#ffbb44",
    "#ffcc00",
    "#ff9933",
    "#ff7722",
    "#ff6600",
  ],
  aurora: [
    "#00ff87",
    "#22ffaa",
    "#44ffcc",
    "#60efff",
    "#88ddff",
    "#bb99ff",
    "#dd77ee",
    "#ff68f0",
    "#ff55cc",
    "#00ff87",
  ],
  neon: [
    "#ff00ff",
    "#00ffff",
    "#ff00aa",
    "#00ffaa",
    "#ff0066",
    "#00ffcc",
    "#ff00ff",
  ],
  fire: [
    "#ff0000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ff3300",
    "#ff0000",
  ],
  ice: [
    "#e0f7ff",
    "#b3ecff",
    "#80e1ff",
    "#4dd6ff",
    "#1acbff",
    "#00bfff",
    "#0099cc",
  ],
  royal: [
    "#2b1055",
    "#4b0082",
    "#6a0dad",
    "#8a2be2",
    "#9932cc",
    "#ba55d3",
    "#2b1055",
  ],
  cyberpunk: ["#ff0080", "#ff00ff", "#7928ca", "#2afadf", "#00ffcc", "#ff0080"],
  pastel: ["#ffd1dc", "#ffe4b5", "#e0bbff", "#c1f0f6", "#fef9c3", "#ffd1dc"],
  custom: [
    "#669900",
    "#99cc33",
    "#ccee66",
    "#006699",
    "#3399cc",
    "#990066",
    "#cc3399",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
  ],
}

export const BorderGlow = React.forwardRef<HTMLDivElement, BorderGlowProps>(
  (
    {
      children,
      className,

      width = "100%",
      height,
      aspectRatio,

      animationDuration = 5,
      rotationDirection = "normal",
      paused = false,
      hoverOnly = false,

      gradientType = "conic",
      gradientColors,
      colorPreset = "custom",

      glowIntensity = 1,
      borderWidth = "1.5em",
      blurAmount = "1.5rem",
      inset = "-1em",
      glowSpread = "1",
      innerGlow = false,

      backgroundColor,

      style,
      ...props
    },
    ref
  ) => {
    const colors =
      gradientColors || colorPresets[colorPreset] || colorPresets.custom

    const colorVars: Record<string, string> = {}
    for (let i = 0; i < 10; i++) {
      colorVars[`--glow-color-${i + 1}`] = colors[i % colors.length]
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group relative isolate overflow-hidden rounded-md",
          className
        )}
        style={
          {
            width,
            height,
            aspectRatio,
            background: backgroundColor,

            "--glow-animation-duration": `${animationDuration}s`,
            "--glow-direction": rotationDirection,
            "--glow-spread": glowSpread,

            ...colorVars,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        <div
          className={cn(
            "glow-border absolute -z-10 rounded-[inherit] border-solid",
            paused && "[animation-play-state:paused]",
            hoverOnly &&
              "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          style={{
            inset: innerGlow ? "0" : inset,
            borderWidth,
            filter: `blur(${blurAmount})`,
            opacity: glowIntensity,
            animationPlayState: paused ? "paused" : "running",
          }}
          data-gradient-type={gradientType}
        />

        <div className="relative z-10 h-full w-full p-4">{children}</div>
      </div>
    )
  }
)

BorderGlow.displayName = "BorderGlow"

export default BorderGlow
