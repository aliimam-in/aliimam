
import * as React from "react"

export interface UserLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserLock = React.forwardRef<SVGSVGElement, UserLockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19 16v-2a2 2 0 0 0-4 0v2m-5.5-1H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><rect width="8" height="5" x="13" y="16" rx=".899"/></g>` }}
      {...props}
    />
  )
)

UserLock.displayName = "UserLock"
