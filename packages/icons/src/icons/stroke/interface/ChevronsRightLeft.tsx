
import * as React from "react"

export interface ChevronsRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsRightLeft = React.forwardRef<SVGSVGElement, ChevronsRightLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m20 17l-5-5l5-5M4 17l5-5l-5-5"/>` }}
      {...props}
    />
  )
)

ChevronsRightLeft.displayName = "ChevronsRightLeft"
