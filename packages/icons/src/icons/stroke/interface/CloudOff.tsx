
import * as React from "react"

export interface CloudOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudOff = React.forwardRef<SVGSVGElement, CloudOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057m-2.926 2.753A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78M2 2l20 20"/>` }}
      {...props}
    />
  )
)

CloudOff.displayName = "CloudOff"
