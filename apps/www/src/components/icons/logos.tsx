/* eslint-disable @typescript-eslint/no-explicit-any */
import { allLogos } from "../../../../../packages/logos/src/generated"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  color?: string
}

export function Logos({ name, size = 24, color = "currentColor", ...props }: LogoProps) {
  let match: any = null

  // exact id match
  outer:
  for (const logos of Object.values(allLogos)) {
    for (const entry of Object.values(logos)) {
      const e = entry as any
      if (e.metadata.id === name) {
        match = e
        break outer
      }
    }
  }

  // baseId + default variant match
  if (!match) {
    outer:
    for (const logos of Object.values(allLogos)) {
      for (const entry of Object.values(logos)) {
        const e = entry as any
        if (e.metadata.baseId === name && e.metadata.variant === "default") {
          match = e
          break outer
        }
      }
    }
  }

  // koi variant nahi mila toh pehla match lo
  if (!match) {
    outer:
    for (const logos of Object.values(allLogos)) {
      for (const entry of Object.values(logos)) {
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
  const hasCurrentColor = metadata.hasCurrentColor

  return (
    <Component
      size={size}
      viewBox={metadata.viewBox}
      {...(hasCurrentColor ? { style: { color } } : {})}
      {...props}
    />
  )
}