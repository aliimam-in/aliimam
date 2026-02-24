
import * as React from "react"

export interface ListIndentIncreaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListIndentIncrease = React.forwardRef<SVGSVGElement, ListIndentIncreaseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 5H11m10 7H11m10 7H11M3 8l4 4l-4 4"/>` }}
      {...props}
    />
  )
)

ListIndentIncrease.displayName = "ListIndentIncrease"
