
import * as React from "react"

export interface TurntableProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Turntable = React.forwardRef<SVGSVGElement, TurntableProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12.01h.01M18 8v4a8 8 0 0 1-1.07 4"/><circle cx="10" cy="12" r="4"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>` }}
      {...props}
    />
  )
)

Turntable.displayName = "Turntable"
