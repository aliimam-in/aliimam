
import * as React from "react"

export interface CylinderProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cylinder = React.forwardRef<SVGSVGElement, CylinderProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/></g>` }}
      {...props}
    />
  )
)

Cylinder.displayName = "Cylinder"
