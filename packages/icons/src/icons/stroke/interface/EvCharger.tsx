
import * as React from "react"

export interface EvChargerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EvCharger = React.forwardRef<SVGSVGElement, EvChargerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 7h11"/><path d="m9 11l-2 3h3l-2 3"/></g>` }}
      {...props}
    />
  )
)

EvCharger.displayName = "EvCharger"
