
import * as React from "react"

export interface UserRoundCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserRoundCog = React.forwardRef<SVGSVGElement, UserRoundCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14.305 19.53l.923-.382m0-2.296l-.923-.383m2.547-1.241l-.383-.923m.383 6.467l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472l.924-.383m-.924 2.679l.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

UserRoundCog.displayName = "UserRoundCog"
