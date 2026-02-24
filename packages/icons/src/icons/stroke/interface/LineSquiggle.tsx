
import * as React from "react"

export interface LineSquiggleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LineSquiggle = React.forwardRef<SVGSVGElement, LineSquiggleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"/>` }}
      {...props}
    />
  )
)

LineSquiggle.displayName = "LineSquiggle"
