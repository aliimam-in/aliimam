
import * as React from "react"

export interface IterationCwProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IterationCw = React.forwardRef<SVGSVGElement, IterationCwProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10a8 8 0 1 1 8 8H4"/><path d="m8 22l-4-4l4-4"/></g>` }}
      {...props}
    />
  )
)

IterationCw.displayName = "IterationCw"
