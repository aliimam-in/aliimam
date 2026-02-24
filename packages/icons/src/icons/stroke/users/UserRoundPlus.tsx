
import * as React from "react"

export interface UserRoundPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRoundPlus = React.forwardRef<SVGSVGElement, UserRoundPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6m3-3h-6"/></g>` }}
      {...props}
    />
  )
)

UserRoundPlus.displayName = "UserRoundPlus"
