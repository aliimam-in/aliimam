
import * as React from "react"

export interface MonitorOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorOff = React.forwardRef<SVGSVGElement, MonitorOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 17v4m5-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826M2 2l20 20M8 21h8M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042"/>` }}
      {...props}
    />
  )
)

MonitorOff.displayName = "MonitorOff"
