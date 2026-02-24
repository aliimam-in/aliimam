
import * as React from "react"

export interface PanelLeftDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PanelLeftDashed = React.forwardRef<SVGSVGElement, PanelLeftDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1m0 4v2M9 3v2m0 4v1"/></g>` }}
      {...props}
    />
  )
)

PanelLeftDashed.displayName = "PanelLeftDashed"
