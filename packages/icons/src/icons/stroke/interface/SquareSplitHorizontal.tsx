
import * as React from "react"

export interface SquareSplitHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareSplitHorizontal = React.forwardRef<SVGSVGElement, SquareSplitHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3m8 0h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3M12 4v16"/>` }}
      {...props}
    />
  )
)

SquareSplitHorizontal.displayName = "SquareSplitHorizontal"
