
import * as React from "react"

export interface AlignVerticalDistributeStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignVerticalDistributeStart = React.forwardRef<SVGSVGElement, AlignVerticalDistributeStartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 14h20M2 4h20"/></g>` }}
      {...props}
    />
  )
)

AlignVerticalDistributeStart.displayName = "AlignVerticalDistributeStart"
