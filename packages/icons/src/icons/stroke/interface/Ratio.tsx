
import * as React from "react"

export interface RatioProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ratio = React.forwardRef<SVGSVGElement, RatioProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="12" height="20" x="6" y="2" rx="2"/><rect width="20" height="12" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

Ratio.displayName = "Ratio"
