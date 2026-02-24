
import * as React from "react"

export interface UserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRound = React.forwardRef<SVGSVGElement, UserRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></g>` }}
      {...props}
    />
  )
)

UserRound.displayName = "UserRound"
