
import * as React from "react"

export interface PilcrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PilcrowRight = React.forwardRef<SVGSVGElement, PilcrowRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 3v11m0-5H7a1 1 0 0 1 0-6h8m-1 0v11m4 0l4 4H2m20 0l-4 4"/>` }}
      {...props}
    />
  )
)

PilcrowRight.displayName = "PilcrowRight"
