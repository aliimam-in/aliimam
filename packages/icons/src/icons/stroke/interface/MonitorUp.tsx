
import * as React from "react"

export interface MonitorUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorUp = React.forwardRef<SVGSVGElement, MonitorUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m9 10l3-3l3 3m-3 3V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></g>` }}
      {...props}
    />
  )
)

MonitorUp.displayName = "MonitorUp"
