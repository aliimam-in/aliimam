
import * as React from "react"

export interface SquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Square = React.forwardRef<SVGSVGElement, SquareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<rect width="18" height="18" x="3" y="3" fill="none" stroke="currentColor" stroke-width="2" rx="2"/>` }}
      {...props}
    />
  )
)

Square.displayName = "Square"
