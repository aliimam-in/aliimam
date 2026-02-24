
import * as React from "react"

export interface PhilippinePesoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PhilippinePeso = React.forwardRef<SVGSVGElement, PhilippinePesoProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M20 11H4m16-4H4m3 14V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"/>` }}
      {...props}
    />
  )
)

PhilippinePeso.displayName = "PhilippinePeso"
