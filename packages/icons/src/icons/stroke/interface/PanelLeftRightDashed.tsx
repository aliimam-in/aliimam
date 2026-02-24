
import * as React from "react"

export interface PanelLeftRightDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PanelLeftRightDashed = React.forwardRef<SVGSVGElement, PanelLeftRightDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10V9m0 6v-1m0 7v-2m0-14V3m-6 7V9m0 6v-1m0 7v-2M9 5V3"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

PanelLeftRightDashed.displayName = "PanelLeftRightDashed"
