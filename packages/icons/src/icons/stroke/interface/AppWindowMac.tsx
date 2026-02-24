
import * as React from "react"

export interface AppWindowMacProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AppWindowMac = React.forwardRef<SVGSVGElement, AppWindowMacProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01"/></g>` }}
      {...props}
    />
  )
)

AppWindowMac.displayName = "AppWindowMac"
