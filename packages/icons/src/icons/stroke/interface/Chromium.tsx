
import * as React from "react"

export interface ChromiumProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Chromium = React.forwardRef<SVGSVGElement, ChromiumProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.88 21.94L15.46 14m5.71-6H12M3.95 6.06L8.54 14"/><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></g>` }}
      {...props}
    />
  )
)

Chromium.displayName = "Chromium"
