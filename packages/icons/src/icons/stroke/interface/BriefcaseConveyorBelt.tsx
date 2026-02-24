
import * as React from "react"

export interface BriefcaseConveyorBeltProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BriefcaseConveyorBelt = React.forwardRef<SVGSVGElement, BriefcaseConveyorBeltProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20v2m4-2v2m4-2v2m3-2H3m3 0v2m2-6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"/><rect width="16" height="10" x="4" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt"
