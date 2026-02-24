
import * as React from "react"

export interface ClockCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClockCheck = React.forwardRef<SVGSVGElement, ClockCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v6l4 2"/><path d="M22 12a10 10 0 1 0-11 9.95"/><path d="m22 16l-5.5 5.5L14 19"/></g>` }}
      {...props}
    />
  )
)

ClockCheck.displayName = "ClockCheck"
