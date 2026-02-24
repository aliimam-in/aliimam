
import * as React from "react"

export interface SquareDashedTopSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDashedTopSolid = React.forwardRef<SVGSVGElement, SquareDashedTopSolidProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 21h1m6-7v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 9v1m2 11a2 2 0 0 1-2-2m6 2h1"/>` }}
      {...props}
    />
  )
)

SquareDashedTopSolid.displayName = "SquareDashedTopSolid"
