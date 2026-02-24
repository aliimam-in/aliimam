
import * as React from "react"

export interface UserCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UserCog = React.forwardRef<SVGSVGElement, UserCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15H6a4 4 0 0 0-4 4v2m12.305-4.47l.923-.382m0-2.296l-.923-.383m2.547-1.241l-.383-.923m.383 6.467l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924m1.624-3.92l.924-.383m-.924 2.679l.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></g>` }}
      {...props}
    />
  )
)

UserCog.displayName = "UserCog"
