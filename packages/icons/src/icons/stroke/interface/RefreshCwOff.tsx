
import * as React from "react"

export interface RefreshCwOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RefreshCwOff = React.forwardRef<SVGSVGElement, RefreshCwOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m21 8l-2.26-2.26A9.75 9.75 0 0 0 12 3c-1 0-1.97.16-2.87.47M8 16H3v5m0-9c0-2.49 1-4.74 2.64-6.36"/><path d="m3 16l2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64M21 12c0 1-.16 1.97-.47 2.87M21 3v5h-5m6 14L2 2"/></g>` }}
      {...props}
    />
  )
)

RefreshCwOff.displayName = "RefreshCwOff"
