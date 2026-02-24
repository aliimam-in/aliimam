
import * as React from "react"

export interface CircleArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowDown = React.forwardRef<SVGSVGElement, CircleArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8m-4-4l4 4l4-4"/></g>` }}
      {...props}
    />
  )
)

CircleArrowDown.displayName = "CircleArrowDown"
