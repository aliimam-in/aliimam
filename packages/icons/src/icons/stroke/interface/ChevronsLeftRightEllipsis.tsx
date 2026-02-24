
import * as React from "react"

export interface ChevronsLeftRightEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsLeftRightEllipsis = React.forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 12h.01M16 12h.01M17 7l5 5l-5 5M7 7l-5 5l5 5m1-5h.01"/>` }}
      {...props}
    />
  )
)

ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis"
