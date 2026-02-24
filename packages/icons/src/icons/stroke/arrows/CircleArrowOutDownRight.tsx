
import * as React from "react"

export interface CircleArrowOutDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowOutDownRight = React.forwardRef<SVGSVGElement, CircleArrowOutDownRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 22a10 10 0 1 1 10-10m0 10L12 12m10 4v6h-6"/>` }}
      {...props}
    />
  )
)

CircleArrowOutDownRight.displayName = "CircleArrowOutDownRight"
