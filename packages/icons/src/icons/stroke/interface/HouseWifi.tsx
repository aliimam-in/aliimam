
import * as React from "react"

export interface HouseWifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HouseWifi = React.forwardRef<SVGSVGElement, HouseWifiProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 13.866a4 4 0 0 1 5 .01M12 17h.01"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 10.754a8 8 0 0 1 10 0"/></g>` }}
      {...props}
    />
  )
)

HouseWifi.displayName = "HouseWifi"
