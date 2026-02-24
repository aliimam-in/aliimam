
import * as React from "react"

export interface MonitorSmartphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorSmartphone = React.forwardRef<SVGSVGElement, MonitorSmartphoneProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></g>` }}
      {...props}
    />
  )
)

MonitorSmartphone.displayName = "MonitorSmartphone"
