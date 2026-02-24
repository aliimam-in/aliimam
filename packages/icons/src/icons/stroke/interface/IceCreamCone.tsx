
import * as React from "react"

export interface IceCreamConeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IceCreamCone = React.forwardRef<SVGSVGElement, IceCreamConeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 11l4.08 10.35a1 1 0 0 0 1.84 0L17 11m0-4A5 5 0 0 0 7 7m10 0a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/>` }}
      {...props}
    />
  )
)

IceCreamCone.displayName = "IceCreamCone"
