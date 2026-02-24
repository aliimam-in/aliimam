
import * as React from "react"

export interface CheckCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CheckCheck = React.forwardRef<SVGSVGElement, CheckCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"/>` }}
      {...props}
    />
  )
)

CheckCheck.displayName = "CheckCheck"
