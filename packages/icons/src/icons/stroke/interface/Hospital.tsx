
import * as React from "react"

export interface HospitalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Hospital = React.forwardRef<SVGSVGElement, HospitalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></g>` }}
      {...props}
    />
  )
)

Hospital.displayName = "Hospital"
