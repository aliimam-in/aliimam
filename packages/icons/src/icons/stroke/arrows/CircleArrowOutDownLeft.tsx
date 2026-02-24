
import * as React from "react"

export interface CircleArrowOutDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleArrowOutDownLeft = React.forwardRef<SVGSVGElement, CircleArrowOutDownLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 12a10 10 0 1 1 10 10M2 22l10-10M8 22H2v-6"/>` }}
      {...props}
    />
  )
)

CircleArrowOutDownLeft.displayName = "CircleArrowOutDownLeft"
