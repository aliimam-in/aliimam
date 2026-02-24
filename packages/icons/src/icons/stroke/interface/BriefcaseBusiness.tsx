
import * as React from "react"

export interface BriefcaseBusinessProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BriefcaseBusiness = React.forwardRef<SVGSVGElement, BriefcaseBusinessProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

BriefcaseBusiness.displayName = "BriefcaseBusiness"
