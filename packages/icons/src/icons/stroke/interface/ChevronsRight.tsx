
import * as React from "react"

export interface ChevronsRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsRight = React.forwardRef<SVGSVGElement, ChevronsRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m6 17l5-5l-5-5m7 10l5-5l-5-5"/>` }}
      {...props}
    />
  )
)

ChevronsRight.displayName = "ChevronsRight"
