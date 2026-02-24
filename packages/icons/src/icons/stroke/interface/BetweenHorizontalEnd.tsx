
import * as React from "react"

export interface BetweenHorizontalEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BetweenHorizontalEnd = React.forwardRef<SVGSVGElement, BetweenHorizontalEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="13" height="7" x="3" y="3" rx="1"/><path d="m22 15l-3-3l3-3"/><rect width="13" height="7" x="3" y="14" rx="1"/></g>` }}
      {...props}
    />
  )
)

BetweenHorizontalEnd.displayName = "BetweenHorizontalEnd"
