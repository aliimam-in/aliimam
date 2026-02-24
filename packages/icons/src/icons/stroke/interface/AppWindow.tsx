
import * as React from "react"

export interface AppWindowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AppWindow = React.forwardRef<SVGSVGElement, AppWindowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M10 4v4M2 8h20M6 4v4"/></g>` }}
      {...props}
    />
  )
)

AppWindow.displayName = "AppWindow"
