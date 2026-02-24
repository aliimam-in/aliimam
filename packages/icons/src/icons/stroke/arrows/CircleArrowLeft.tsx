
import * as React from "react"

export interface CircleArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowLeft = React.forwardRef<SVGSVGElement, CircleArrowLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m12 8l-4 4l4 4m4-4H8"/></g>` }}
      {...props}
    />
  )
)

CircleArrowLeft.displayName = "CircleArrowLeft"
