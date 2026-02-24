
import * as React from "react"

export interface CheckLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CheckLine = React.forwardRef<SVGSVGElement, CheckLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M20 4L9 15m12 4H3m6-4l-5-5"/>` }}
      {...props}
    />
  )
)

CheckLine.displayName = "CheckLine"
