
import * as React from "react"

export interface AccessibilityProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Accessibility = React.forwardRef<SVGSVGElement, AccessibilityProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="4" r="1"/><path d="m18 19l1-7l-6 1M5 8l3-3l5.5 3l-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></g>` }}
      {...props}
    />
  )
)

Accessibility.displayName = "Accessibility"
