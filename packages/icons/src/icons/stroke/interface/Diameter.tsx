
import * as React from "react"

export interface DiameterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Diameter = React.forwardRef<SVGSVGElement, DiameterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M6.48 3.66a10 10 0 0 1 13.86 13.86M6.41 6.41l11.18 11.18M3.66 6.48a10 10 0 0 0 13.86 13.86"/></g>` }}
      {...props}
    />
  )
)

Diameter.displayName = "Diameter"
