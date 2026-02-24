
import * as React from "react"

export interface ChevronsLeftRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsLeftRight = React.forwardRef<SVGSVGElement, ChevronsLeftRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m9 7l-5 5l5 5m6-10l5 5l-5 5"/>` }}
      {...props}
    />
  )
)

ChevronsLeftRight.displayName = "ChevronsLeftRight"
