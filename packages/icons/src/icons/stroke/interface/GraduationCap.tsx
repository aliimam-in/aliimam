
import * as React from "react"

export interface GraduationCapProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GraduationCap = React.forwardRef<SVGSVGElement, GraduationCapProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></g>` }}
      {...props}
    />
  )
)

GraduationCap.displayName = "GraduationCap"
