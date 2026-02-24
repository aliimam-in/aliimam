
import * as React from "react"

export interface PcCaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PcCase = React.forwardRef<SVGSVGElement, PcCaseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M15 14h.01M9 6h6m-6 4h6"/></g>` }}
      {...props}
    />
  )
)

PcCase.displayName = "PcCase"
