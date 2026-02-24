
import * as React from "react"

export interface HelicopterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Helicopter = React.forwardRef<SVGSVGElement, HelicopterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 17v4m3-18v8a2 2 0 0 0 2 2h5.865M17 17v4"/><path d="M18 17a4 4 0 0 0 4-4a8 6 0 0 0-8-6a6 5 0 0 0-6 5v3a2 2 0 0 0 2 2zM2 10v5M6 3h16M7 21h14M8 13H2"/></g>` }}
      {...props}
    />
  )
)

Helicopter.displayName = "Helicopter"
