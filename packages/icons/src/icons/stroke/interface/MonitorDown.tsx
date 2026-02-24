
import * as React from "react"

export interface MonitorDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorDown = React.forwardRef<SVGSVGElement, MonitorDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 13V7m3 3l-3 3l-3-3"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></g>` }}
      {...props}
    />
  )
)

MonitorDown.displayName = "MonitorDown"
