
import * as React from "react"

export interface UserKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserKey = React.forwardRef<SVGSVGElement, UserKeyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 11v6m0-4h2M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"/><circle cx="10" cy="7" r="4"/><circle cx="20" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

UserKey.displayName = "UserKey"
