
import * as React from "react"

export interface LampFloorProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LampFloor = React.forwardRef<SVGSVGElement, LampFloorProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 10v12m5.929-14.371A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629zM9 22h6"/>` }}
      {...props}
    />
  )
)

LampFloor.displayName = "LampFloor"
