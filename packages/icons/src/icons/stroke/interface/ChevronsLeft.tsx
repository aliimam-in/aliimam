
import * as React from "react"

export interface ChevronsLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsLeft = React.forwardRef<SVGSVGElement, ChevronsLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m11 17l-5-5l5-5m7 10l-5-5l5-5"/>` }}
      {...props}
    />
  )
)

ChevronsLeft.displayName = "ChevronsLeft"
