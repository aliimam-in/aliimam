
import * as React from "react"

export interface SquareUserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareUserRound = React.forwardRef<SVGSVGElement, SquareUserRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

SquareUserRound.displayName = "SquareUserRound"
