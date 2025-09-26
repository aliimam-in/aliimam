import type * as React from "react"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  fill?: string 
  strokeWidth?: number
  strokeLinecap?: "butt" | "round" | "square"
  strokeLinejoin?: "round" | "miter" | "bevel"
  strokeDasharray?: string
  opacity?: number
  className?: string
}
