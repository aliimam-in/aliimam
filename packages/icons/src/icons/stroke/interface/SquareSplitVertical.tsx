
import * as React from "react"

export interface SquareSplitVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareSplitVertical = React.forwardRef<SVGSVGElement, SquareSplitVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3m0 8v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3m-1-4h16"/>` }}
      {...props}
    />
  )
)

SquareSplitVertical.displayName = "SquareSplitVertical"
