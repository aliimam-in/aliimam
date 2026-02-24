
import * as React from "react"

export interface ArrowsUpFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowsUpFromLine = React.forwardRef<SVGSVGElement, ArrowsUpFromLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m4 6l3-3l3 3M7 17V3m7 3l3-3l3 3m-3 11V3M4 21h16"/>` }}
      {...props}
    />
  )
)

ArrowsUpFromLine.displayName = "ArrowsUpFromLine"
