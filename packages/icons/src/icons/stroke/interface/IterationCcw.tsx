
import * as React from "react"

export interface IterationCcwProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IterationCcw = React.forwardRef<SVGSVGElement, IterationCcwProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m16 14l4 4l-4 4"/><path d="M20 10a8 8 0 1 0-8 8h8"/></g>` }}
      {...props}
    />
  )
)

IterationCcw.displayName = "IterationCcw"
