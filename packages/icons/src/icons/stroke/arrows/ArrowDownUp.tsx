
import * as React from "react"

export interface ArrowDownUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownUp = React.forwardRef<SVGSVGElement, ArrowDownUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 16l4 4l4-4m-4 4V4m14 4l-4-4l-4 4m4-4v16"/>` }}
      {...props}
    />
  )
)

ArrowDownUp.displayName = "ArrowDownUp"
