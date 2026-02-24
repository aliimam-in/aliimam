
import * as React from "react"

export interface ArrowUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpDown = React.forwardRef<SVGSVGElement, ArrowUpDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m21 16l-4 4l-4-4m4 4V4M3 8l4-4l4 4M7 4v16"/>` }}
      {...props}
    />
  )
)

ArrowUpDown.displayName = "ArrowUpDown"
