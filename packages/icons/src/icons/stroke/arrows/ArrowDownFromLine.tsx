
import * as React from "react"

export interface ArrowDownFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownFromLine = React.forwardRef<SVGSVGElement, ArrowDownFromLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M19 3H5m7 18V7m-6 8l6 6l6-6"/>` }}
      {...props}
    />
  )
)

ArrowDownFromLine.displayName = "ArrowDownFromLine"
