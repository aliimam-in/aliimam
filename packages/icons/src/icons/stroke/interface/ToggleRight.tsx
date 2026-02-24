
import * as React from "react"

export interface ToggleRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ToggleRight = React.forwardRef<SVGSVGElement, ToggleRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/></g>` }}
      {...props}
    />
  )
)

ToggleRight.displayName = "ToggleRight"
