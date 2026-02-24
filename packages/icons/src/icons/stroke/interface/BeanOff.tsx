
import * as React from "react"

export interface BeanOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BeanOff = React.forwardRef<SVGSVGElement, BeanOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"/><path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4 4 0 0 1 2.039 2.04M2 2l20 20"/></g>` }}
      {...props}
    />
  )
)

BeanOff.displayName = "BeanOff"
