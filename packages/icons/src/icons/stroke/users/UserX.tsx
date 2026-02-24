
import * as React from "react"

export interface UserXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserX = React.forwardRef<SVGSVGElement, UserXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8l5 5m0-5l-5 5"/></g>` }}
      {...props}
    />
  )
)

UserX.displayName = "UserX"
