
import * as React from "react"

export interface CircleArrowOutUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowOutUpLeft = React.forwardRef<SVGSVGElement, CircleArrowOutUpLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 8V2h6M2 2l10 10m0-10A10 10 0 1 1 2 12"/>` }}
      {...props}
    />
  )
)

CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft"
