
import * as React from "react"

export interface SaudiRiyalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SaudiRiyal = React.forwardRef<SVGSVGElement, SaudiRiyalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m20 19.5l-5.5 1.2m0-16.7v11.22a1 1 0 0 0 1.242.97L20 15.2M2.978 19.351l5.549-1.363A2 2 0 0 0 10 16V2m10 8L4 13.5"/>` }}
      {...props}
    />
  )
)

SaudiRiyal.displayName = "SaudiRiyal"
