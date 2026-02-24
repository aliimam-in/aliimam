
import * as React from "react"

export interface UsersRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UsersRound = React.forwardRef<SVGSVGElement, UsersRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></g>` }}
      {...props}
    />
  )
)

UsersRound.displayName = "UsersRound"
