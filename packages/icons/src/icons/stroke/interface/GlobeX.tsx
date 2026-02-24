
import * as React from "react"

export interface GlobeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GlobeX = React.forwardRef<SVGSVGElement, GlobeXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 3l5 5M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 4-10m5-9l-5 5"/>` }}
      {...props}
    />
  )
)

GlobeX.displayName = "GlobeX"
