
import * as React from "react"

export interface BrushProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Brush = React.forwardRef<SVGSVGElement, BrushProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m11 10l3 3m-7.5 8A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031L21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></g>` }}
      {...props}
    />
  )
)

Brush.displayName = "Brush"
