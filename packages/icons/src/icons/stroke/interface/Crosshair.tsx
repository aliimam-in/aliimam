
import * as React from "react"

export interface CrosshairProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Crosshair = React.forwardRef<SVGSVGElement, CrosshairProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"/></g>` }}
      {...props}
    />
  )
)

Crosshair.displayName = "Crosshair"
