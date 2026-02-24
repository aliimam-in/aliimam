
import * as React from "react"

export interface HardHatProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HardHat = React.forwardRef<SVGSVGElement, HardHatProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"/><rect width="20" height="4" x="2" y="15" rx="1"/></g>` }}
      {...props}
    />
  )
)

HardHat.displayName = "HardHat"
