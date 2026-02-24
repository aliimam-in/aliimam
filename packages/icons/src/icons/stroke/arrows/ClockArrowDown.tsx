
import * as React from "react"

export interface ClockArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClockArrowDown = React.forwardRef<SVGSVGElement, ClockArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v6l2 1"/><path d="M12.337 21.994a10 10 0 1 1 9.588-8.767"/><path d="m14 18l4 4l4-4m-4-4v8"/></g>` }}
      {...props}
    />
  )
)

ClockArrowDown.displayName = "ClockArrowDown"
