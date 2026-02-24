
import * as React from "react"

export interface IndentIncreaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IndentIncrease = React.forwardRef<SVGSVGElement, IndentIncreaseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 12H11m10 6H11M21 6H11M3 8l4 4l-4 4"/>` }}
      {...props}
    />
  )
)

IndentIncrease.displayName = "IndentIncrease"
