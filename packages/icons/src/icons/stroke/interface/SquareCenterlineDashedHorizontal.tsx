
import * as React from "react"

export interface SquareCenterlineDashedHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareCenterlineDashedHorizontal = React.forwardRef<SVGSVGElement, SquareCenterlineDashedHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3m8-18h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3m-4-1v2m0-8v2m0-8v2m0-8v2"/>` }}
      {...props}
    />
  )
)

SquareCenterlineDashedHorizontal.displayName = "SquareCenterlineDashedHorizontal"
