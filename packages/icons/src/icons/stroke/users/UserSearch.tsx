
import * as React from "react"

export interface UserSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserSearch = React.forwardRef<SVGSVGElement, UserSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21l-1.9-1.9"/></g>` }}
      {...props}
    />
  )
)

UserSearch.displayName = "UserSearch"
