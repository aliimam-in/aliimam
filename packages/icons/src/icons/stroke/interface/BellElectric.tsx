
import * as React from "react"

export interface BellElectricProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BellElectric = React.forwardRef<SVGSVGElement, BellElectricProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18.518 17.347A7 7 0 0 1 14 19m4.8-15A11 11 0 0 1 20 9M9 9h.01"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="9" r="7"/><rect width="10" height="6" x="4" y="16" rx="2"/></g>` }}
      {...props}
    />
  )
)

BellElectric.displayName = "BellElectric"
