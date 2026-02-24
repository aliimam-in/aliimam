
import * as React from "react"

export interface ClubProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Club = React.forwardRef<SVGSVGElement, ClubProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6ZM12 17.66V22"/>` }}
      {...props}
    />
  )
)

Club.displayName = "Club"
