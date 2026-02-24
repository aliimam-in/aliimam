
import * as React from "react"

export interface CirclePileProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CirclePile = React.forwardRef<SVGSVGElement, CirclePileProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="19" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="20" cy="19" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="8" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

CirclePile.displayName = "CirclePile"
