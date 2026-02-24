
import * as React from "react"

export interface ClockPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClockPlus = React.forwardRef<SVGSVGElement, ClockPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v6l3.644 1.822M16 19h6m-3-3v6"/><path d="M21.92 13.267a10 10 0 1 0-8.653 8.653"/></g>` }}
      {...props}
    />
  )
)

ClockPlus.displayName = "ClockPlus"
