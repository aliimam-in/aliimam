
import * as React from "react"

export interface ClockArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClockArrowUp = React.forwardRef<SVGSVGElement, ClockArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v6l1.56.78"/><path d="M13.227 21.925a10 10 0 1 1 8.767-9.588"/><path d="m14 18l4-4l4 4m-4 4v-8"/></g>` }}
      {...props}
    />
  )
)

ClockArrowUp.displayName = "ClockArrowUp"
