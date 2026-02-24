
import * as React from "react"

export interface SquareDashedBottomCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDashedBottomCode = React.forwardRef<SVGSVGElement, SquareDashedBottomCodeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 9.5L8 12l2 2.5m4 6.5h1M14 9.5l2 2.5l-2 2.5"/><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1"/></g>` }}
      {...props}
    />
  )
)

SquareDashedBottomCode.displayName = "SquareDashedBottomCode"
