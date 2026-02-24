
import * as React from "react"

export interface CornerUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CornerUpLeft = React.forwardRef<SVGSVGElement, CornerUpLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20v-7a4 4 0 0 0-4-4H4"/><path d="M9 14L4 9l5-5"/></g>` }}
      {...props}
    />
  )
)

CornerUpLeft.displayName = "CornerUpLeft"
