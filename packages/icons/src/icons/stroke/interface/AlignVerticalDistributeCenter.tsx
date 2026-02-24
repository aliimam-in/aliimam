
import * as React from "react"

export interface AlignVerticalDistributeCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, AlignVerticalDistributeCenterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17h-3m3-10h-5M5 17H2M7 7H2"/><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/></g>` }}
      {...props}
    />
  )
)

AlignVerticalDistributeCenter.displayName = "AlignVerticalDistributeCenter"
