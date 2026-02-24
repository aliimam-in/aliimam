
import * as React from "react"

export interface ShipWheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ShipWheel = React.forwardRef<SVGSVGElement, ShipWheelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5M19 5l-5.23 5.23M22 12h-7.5m4.5 7l-5.23-5.23M12 14.5V22m-1.77-8.23L5 19m4.5-7H2m8.23-1.77L5 5"/><circle cx="12" cy="12" r="2.5"/></g>` }}
      {...props}
    />
  )
)

ShipWheel.displayName = "ShipWheel"
