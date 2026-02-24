
import * as React from "react"

export interface ArrowRightToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowRightToLine = React.forwardRef<SVGSVGElement, ArrowRightToLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 12H3m8 6l6-6l-6-6m10-1v14"/>` }}
      {...props}
    />
  )
)

ArrowRightToLine.displayName = "ArrowRightToLine"
