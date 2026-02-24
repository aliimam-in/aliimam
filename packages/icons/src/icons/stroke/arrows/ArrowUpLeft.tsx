
import * as React from "react"

export interface ArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, ArrowUpLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 17V7h10m0 10L7 7"/>` }}
      {...props}
    />
  )
)

ArrowUpLeft.displayName = "ArrowUpLeft"
