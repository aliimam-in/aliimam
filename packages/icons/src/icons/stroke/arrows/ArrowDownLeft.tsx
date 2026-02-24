
import * as React from "react"

export interface ArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, ArrowDownLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 7L7 17m10 0H7V7"/>` }}
      {...props}
    />
  )
)

ArrowDownLeft.displayName = "ArrowDownLeft"
