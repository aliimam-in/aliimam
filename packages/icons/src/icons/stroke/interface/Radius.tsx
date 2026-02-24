
import * as React from "react"

export interface RadiusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Radius = React.forwardRef<SVGSVGElement, RadiusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20.34 17.52a10 10 0 1 0-2.82 2.82"/><circle cx="19" cy="19" r="2"/><path d="m13.41 13.41l4.18 4.18"/><circle cx="12" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

Radius.displayName = "Radius"
