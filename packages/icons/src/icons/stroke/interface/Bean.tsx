
import * as React from "react"

export interface BeanProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bean = React.forwardRef<SVGSVGElement, BeanProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9s-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402"/><path d="M5.341 10.62a4 4 0 1 0 5.279-5.28"/></g>` }}
      {...props}
    />
  )
)

Bean.displayName = "Bean"
