
import * as React from "react"

export interface CircleArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowUp = React.forwardRef<SVGSVGElement, CircleArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 12l-4-4l-4 4m4 4V8"/></g>` }}
      {...props}
    />
  )
)

CircleArrowUp.displayName = "CircleArrowUp"
