
import * as React from "react"

export interface UserRoundSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRoundSearch = React.forwardRef<SVGSVGElement, UserRoundSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22l-1.9-1.9"/></g>` }}
      {...props}
    />
  )
)

UserRoundSearch.displayName = "UserRoundSearch"
