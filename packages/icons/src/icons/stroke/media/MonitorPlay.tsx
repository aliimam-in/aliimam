
import * as React from "react"

export interface MonitorPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorPlay = React.forwardRef<SVGSVGElement, MonitorPlayProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"/><rect width="20" height="14" x="2" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

MonitorPlay.displayName = "MonitorPlay"
