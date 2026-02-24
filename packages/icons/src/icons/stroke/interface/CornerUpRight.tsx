
import * as React from "react"

export interface CornerUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CornerUpRight = React.forwardRef<SVGSVGElement, CornerUpRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m15 14l5-5l-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></g>` }}
      {...props}
    />
  )
)

CornerUpRight.displayName = "CornerUpRight"
