
import * as React from "react"

export interface ArrowUpToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpToLine = React.forwardRef<SVGSVGElement, ArrowUpToLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 3h14m-1 10l-6-6l-6 6m6-6v14"/>` }}
      {...props}
    />
  )
)

ArrowUpToLine.displayName = "ArrowUpToLine"
