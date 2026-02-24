
import * as React from "react"

export interface ArrowDownToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownToLine = React.forwardRef<SVGSVGElement, ArrowDownToLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 17V3m-6 8l6 6l6-6m1 10H5"/>` }}
      {...props}
    />
  )
)

ArrowDownToLine.displayName = "ArrowDownToLine"
