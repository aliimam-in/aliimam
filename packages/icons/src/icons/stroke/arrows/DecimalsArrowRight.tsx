
import * as React from "react"

export interface DecimalsArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DecimalsArrowRight = React.forwardRef<SVGSVGElement, DecimalsArrowRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 18h10m-3 3l3-3l-3-3M3 11h.01"/><rect width="5" height="8" x="15" y="3" rx="2.5"/><rect width="5" height="8" x="6" y="3" rx="2.5"/></g>` }}
      {...props}
    />
  )
)

DecimalsArrowRight.displayName = "DecimalsArrowRight"
