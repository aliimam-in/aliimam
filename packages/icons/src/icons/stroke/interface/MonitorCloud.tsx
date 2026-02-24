
import * as React from "react"

export interface MonitorCloudProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorCloud = React.forwardRef<SVGSVGElement, MonitorCloudProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4zm1 4v4m-4 0h8"/><rect width="20" height="14" x="2" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

MonitorCloud.displayName = "MonitorCloud"
