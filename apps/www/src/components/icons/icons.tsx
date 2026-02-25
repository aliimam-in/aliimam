/* eslint-disable @typescript-eslint/no-explicit-any */
import { allLogos } from "../../../../../packages/icons/src/generated"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  variant?: "default" | "outline" | "filled" | "circle"
}

export function Icons({
  name,
  size = 24,
  strokeWidth = 1,
  color = "currentColor",
  variant,
  fill,
  stroke,
  ...props
}: IconProps) {
  let match: any = null

  // 1. Exact id match
  outer: for (const icons of (Object.values(allLogos) as Record<string, any>[])) {
    for (const entry of Object.values(icons)) {
      const e = entry as any
      if (e.metadata.id === name) {
        match = e
        break outer
      }
    }
  }

  // 2. baseId + variant strict match
  if (!match) {
    const targetVariant = variant ?? "default"
    outer: for (const icons of (Object.values(allLogos) as Record<string, any>[])) {
      for (const entry of Object.values(icons)) {
        const e = entry as any
        const metaVariant = (e.metadata.variant ?? "").toLowerCase()
        const matches =
          e.metadata.baseId === name &&
          (metaVariant === targetVariant ||
            (targetVariant === "default" && (metaVariant === "outline" || metaVariant === "")))
        if (matches) {
          match = e
          break outer
        }
      }
    }
  }

  // 3. Fallback: any matching baseId
  if (!match) {
    outer: for (const icons of (Object.values(allLogos) as Record<string, any>[])) {
      for (const entry of Object.values(icons)) {
        const e = entry as any
        if (e.metadata.baseId === name) {
          match = e
          break outer
        }
      }
    }
  }

  if (!match) return null
  const { Component, metadata } = match

  const resolvedVariant = (metadata.variant ?? "default").toLowerCase()
  const isFilledVariant = resolvedVariant === "filled" || resolvedVariant === "circle"

  const resolvedFill = fill ?? (isFilledVariant ? "currentColor" : "none")
  const resolvedStroke = stroke ?? (isFilledVariant ? "none" : "currentColor")

  return (
    <Component
      size={size}
      fill={resolvedFill}
      stroke={resolvedStroke}
      viewBox={metadata.viewBox}
      strokeWidth={isFilledVariant ? 0 : strokeWidth}
      style={{ color }}
      {...props}
    />
  )
}