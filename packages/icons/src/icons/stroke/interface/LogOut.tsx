
import * as React from "react"

export interface LogOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LogOut = React.forwardRef<SVGSVGElement, LogOutProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>` }}
      {...props}
    />
  )
)

LogOut.displayName = "LogOut"
