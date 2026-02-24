
import * as React from "react"

export interface CableCarProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CableCar = React.forwardRef<SVGSVGElement, CableCarProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12v5m6-5v5M4 17h16"/></g>` }}
      {...props}
    />
  )
)

CableCar.displayName = "CableCar"
