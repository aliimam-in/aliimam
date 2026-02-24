
import * as React from "react"

export interface Clock3Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Clock3 = React.forwardRef<SVGSVGElement, Clock3Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/></g>` }}
      {...props}
    />
  )
)

Clock3.displayName = "Clock3"
