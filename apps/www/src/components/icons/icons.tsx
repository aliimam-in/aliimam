/* eslint-disable @typescript-eslint/no-explicit-any */
import { allLogos } from "../../../../../packages/icons/src/generated"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
}

export function Icons({
  name,
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 1,
  color = "currentColor",
  ...props
}: IconProps) {
  let match: any = null

  outer: for (const icons of Object.values(allLogos)) {
    for (const entry of Object.values(icons)) {
      const e = entry as any
      if (e.metadata.id === name) {
        match = e
        break outer
      }
    }
  }

  if (!match) {
    outer: for (const icons of Object.values(allLogos)) {
      for (const entry of Object.values(icons)) {
        const e = entry as any
        if (e.metadata.baseId === name && e.metadata.variant === "default") {
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
      fill={fill}
      stroke={stroke}
      viewBox={metadata.viewBox}
      strokeWidth={strokeWidth} // stroke-based — always apply
      style={{ color }} // currentColor se color control
      {...props}
    />
  )
}
