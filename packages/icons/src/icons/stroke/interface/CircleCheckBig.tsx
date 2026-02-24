
import * as React from "react"

export interface CircleCheckBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleCheckBig = React.forwardRef<SVGSVGElement, CircleCheckBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11l3 3L22 4"/></g>` }}
      {...props}
    />
  )
)

CircleCheckBig.displayName = "CircleCheckBig"
