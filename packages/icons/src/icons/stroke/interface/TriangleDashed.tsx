
import * as React from "react"

export interface TriangleDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TriangleDashed = React.forwardRef<SVGSVGElement, TriangleDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2m-.126-13.257l1 1.732m1.975 3.477l1 1.732m1.975 3.496a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839m2.951-5.209l-1 1.732M8 21h2M8.102 7.743l-1 1.732"/>` }}
      {...props}
    />
  )
)

TriangleDashed.displayName = "TriangleDashed"
