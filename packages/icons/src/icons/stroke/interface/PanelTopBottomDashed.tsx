
import * as React from "react"

export interface PanelTopBottomDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PanelTopBottomDashed = React.forwardRef<SVGSVGElement, PanelTopBottomDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 15h1m-1-6h1m4 6h2m-2-6h2M3 15h2M3 9h2m4 6h1M9 9h1"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

PanelTopBottomDashed.displayName = "PanelTopBottomDashed"
