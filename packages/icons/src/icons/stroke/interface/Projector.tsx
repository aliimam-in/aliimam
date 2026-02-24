
import * as React from "react"

export interface ProjectorProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Projector = React.forwardRef<SVGSVGElement, ProjectorProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7L3 5m6 1V3m4 4l2-2"/><circle cx="9" cy="13" r="3"/><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17M16 16h2"/></g>` }}
      {...props}
    />
  )
)

Projector.displayName = "Projector"
