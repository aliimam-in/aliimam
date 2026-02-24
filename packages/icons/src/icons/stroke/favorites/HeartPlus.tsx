
import * as React from "react"

export interface HeartPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HeartPlus = React.forwardRef<SVGSVGElement, HeartPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m14.479 19.374l-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49M15 15h6m-3-3v6"/>` }}
      {...props}
    />
  )
)

HeartPlus.displayName = "HeartPlus"
