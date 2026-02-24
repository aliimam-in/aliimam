
import * as React from "react"

export interface ArrowLeftToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowLeftToLine = React.forwardRef<SVGSVGElement, ArrowLeftToLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 19V5m10 1l-6 6l6 6m-6-6h14"/>` }}
      {...props}
    />
  )
)

ArrowLeftToLine.displayName = "ArrowLeftToLine"
