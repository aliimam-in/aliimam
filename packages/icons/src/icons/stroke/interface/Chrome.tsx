
import * as React from "react"

export interface ChromeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Chrome = React.forwardRef<SVGSVGElement, ChromeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8H12M3.95 6.06L8.54 14m2.34 7.94L15.46 14"/></g>` }}
      {...props}
    />
  )
)

Chrome.displayName = "Chrome"
