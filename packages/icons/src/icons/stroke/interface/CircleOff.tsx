
import * as React from "react"

export interface CircleOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleOff = React.forwardRef<SVGSVGElement, CircleOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m2 2l20 20M8.35 2.69A10 10 0 0 1 21.3 15.65m-2.22 3.43A10 10 0 1 1 4.92 4.92"/>` }}
      {...props}
    />
  )
)

CircleOff.displayName = "CircleOff"
