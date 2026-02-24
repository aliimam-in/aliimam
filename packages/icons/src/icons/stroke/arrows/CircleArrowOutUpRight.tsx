
import * as React from "react"

export interface CircleArrowOutUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowOutUpRight = React.forwardRef<SVGSVGElement, CircleArrowOutUpRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 12A10 10 0 1 1 12 2m10 0L12 12m4-10h6v6"/>` }}
      {...props}
    />
  )
)

CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight"
