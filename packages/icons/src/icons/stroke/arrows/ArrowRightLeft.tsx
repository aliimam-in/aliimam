
import * as React from "react"

export interface ArrowRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowRightLeft = React.forwardRef<SVGSVGElement, ArrowRightLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16"/>` }}
      {...props}
    />
  )
)

ArrowRightLeft.displayName = "ArrowRightLeft"
