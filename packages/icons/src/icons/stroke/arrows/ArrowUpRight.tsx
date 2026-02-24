
import * as React from "react"

export interface ArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpRight = React.forwardRef<SVGSVGElement, ArrowUpRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 7h10v10M7 17L17 7"/>` }}
      {...props}
    />
  )
)

ArrowUpRight.displayName = "ArrowUpRight"
