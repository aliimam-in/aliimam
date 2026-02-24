
import * as React from "react"

export interface SquareCenterlineDashedVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareCenterlineDashedVertical = React.forwardRef<SVGSVGElement, SquareCenterlineDashedVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 8v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3m1-4H2m8 0H8m8 0h-2m8 0h-2"/>` }}
      {...props}
    />
  )
)

SquareCenterlineDashedVertical.displayName = "SquareCenterlineDashedVertical"
