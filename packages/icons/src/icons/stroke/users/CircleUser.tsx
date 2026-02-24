
import * as React from "react"

export interface CircleUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleUser = React.forwardRef<SVGSVGElement, CircleUserProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></g>` }}
      {...props}
    />
  )
)

CircleUser.displayName = "CircleUser"
