
import * as React from "react"

export interface ArrowUpFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpFromLine = React.forwardRef<SVGSVGElement, ArrowUpFromLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m18 9l-6-6l-6 6m6-6v14m-7 4h14"/>` }}
      {...props}
    />
  )
)

ArrowUpFromLine.displayName = "ArrowUpFromLine"
