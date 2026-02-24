
import * as React from "react"

export interface IndentDecreaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IndentDecrease = React.forwardRef<SVGSVGElement, IndentDecreaseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 12H11m10 6H11M21 6H11M7 8l-4 4l4 4"/>` }}
      {...props}
    />
  )
)

IndentDecrease.displayName = "IndentDecrease"
