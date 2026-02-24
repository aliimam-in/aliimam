
import * as React from "react"

export interface MonitorDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorDot = React.forwardRef<SVGSVGElement, MonitorDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8"/><circle cx="19" cy="6" r="3"/></g>` }}
      {...props}
    />
  )
)

MonitorDot.displayName = "MonitorDot"
