
import * as React from "react"

export interface UngroupProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ungroup = React.forwardRef<SVGSVGElement, UngroupProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="6" x="5" y="4" rx="1"/><rect width="8" height="6" x="11" y="14" rx="1"/></g>` }}
      {...props}
    />
  )
)

Ungroup.displayName = "Ungroup"
