
import * as React from "react"

export interface UserRoundKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRoundKey = React.forwardRef<SVGSVGElement, UserRoundKeyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19 11v6m0-4h2M2 21a8 8 0 0 1 12.868-6.349"/><circle cx="10" cy="8" r="5"/><circle cx="19" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

UserRoundKey.displayName = "UserRoundKey"
