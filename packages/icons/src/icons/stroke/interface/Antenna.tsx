
import * as React from "react"

export interface AntennaProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Antenna = React.forwardRef<SVGSVGElement, AntennaProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/>` }}
      {...props}
    />
  )
)

Antenna.displayName = "Antenna"
