/* eslint-disable @typescript-eslint/no-explicit-any */
import { allLogos } from "../../../../../packages/logos/src/generated"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  color?: string 
  variant?: "default" | "icon" | "wordmark" | "flags" | "cards" | "stickers"
}

export function Logos({
  name,
  size = 24, 
  color = "currentColor",
  variant, 
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
            (targetVariant === "default" && (metaVariant === "icon" || metaVariant === "")))
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
 
  return (
    <Component
      size={size}
      fill={color} 
      viewBox={metadata.viewBox}  
      {...props}
    />
  )
}