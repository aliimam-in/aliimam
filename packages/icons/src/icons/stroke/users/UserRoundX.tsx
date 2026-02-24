
import * as React from "react"

export interface UserRoundXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRoundX = React.forwardRef<SVGSVGElement, UserRoundXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 21a8 8 0 0 1 11.873-7"/><circle cx="10" cy="8" r="5"/><path d="m17 17l5 5m0-5l-5 5"/></g>` }}
      {...props}
    />
  )
)

UserRoundX.displayName = "UserRoundX"
