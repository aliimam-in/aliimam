
import * as React from "react"

export interface ScissorsLineDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ScissorsLineDashed = React.forwardRef<SVGSVGElement, ScissorsLineDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5.42 9.42L8 12"/><circle cx="4" cy="8" r="2"/><path d="m14 6l-8.58 8.58"/><circle cx="4" cy="16" r="2"/><path d="M10.8 14.8L14 18m2-6h-2m8 0h-2"/></g>` }}
      {...props}
    />
  )
)

ScissorsLineDashed.displayName = "ScissorsLineDashed"
