
import * as React from "react"

export interface SolarPanelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SolarPanel = React.forwardRef<SVGSVGElement, SolarPanelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 2h2m1.28 12l-4.56 8M21 22l-1.558-4H4.558M3 10v2"/><path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506zM7 2a4 4 0 0 1-4 4m5.66 1.66l1.41 1.41"/></g>` }}
      {...props}
    />
  )
)

SolarPanel.displayName = "SolarPanel"
