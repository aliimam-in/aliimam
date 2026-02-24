
import * as React from "react"

export interface TicketsPlaneProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TicketsPlane = React.forwardRef<SVGSVGElement, TicketsPlaneProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5l3.794.506M3.173 8.18l11-5a2 2 0 0 1 2.647.993L18.56 8M6 10V8m0 6v1m0 4v2"/><rect width="20" height="13" x="2" y="8" rx="2"/></g>` }}
      {...props}
    />
  )
)

TicketsPlane.displayName = "TicketsPlane"
