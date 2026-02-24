
import * as React from "react"

export interface ChartNetworkProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartNetwork = React.forwardRef<SVGSVGElement, ChartNetworkProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m13.11 7.664l1.78 2.672m-.728 2.452l-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16"/><circle cx="12" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="9" cy="15" r="2"/></g>` }}
      {...props}
    />
  )
)

ChartNetwork.displayName = "ChartNetwork"
