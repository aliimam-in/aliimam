
import * as React from "react"

export interface BriefcaseMedicalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BriefcaseMedical = React.forwardRef<SVGSVGElement, BriefcaseMedicalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

BriefcaseMedical.displayName = "BriefcaseMedical"
