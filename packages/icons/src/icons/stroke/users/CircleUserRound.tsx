
import * as React from "react"

export interface CircleUserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleUserRound = React.forwardRef<SVGSVGElement, CircleUserRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></g>` }}
      {...props}
    />
  )
)

CircleUserRound.displayName = "CircleUserRound"
