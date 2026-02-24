
import * as React from "react"

export interface BellMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BellMinus = React.forwardRef<SVGSVGElement, BellMinusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-4.757-4.243A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"/>` }}
      {...props}
    />
  )
)

BellMinus.displayName = "BellMinus"
