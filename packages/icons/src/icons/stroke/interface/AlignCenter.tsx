
import * as React from "react"

export interface AlignCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignCenter = React.forwardRef<SVGSVGElement, AlignCenterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 12H7m12 6H5M21 6H3"/>` }}
      {...props}
    />
  )
)

AlignCenter.displayName = "AlignCenter"
