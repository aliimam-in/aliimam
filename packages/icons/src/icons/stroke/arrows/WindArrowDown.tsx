
import * as React from "react"

export interface WindArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WindArrowDown = React.forwardRef<SVGSVGElement, WindArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 2v8m2.8 11.6A2 2 0 1 0 14 18H2m15.5-8a2.5 2.5 0 1 1 2 4H2m4-8l4 4l4-4"/>` }}
      {...props}
    />
  )
)

WindArrowDown.displayName = "WindArrowDown"
