
import * as React from "react"

export interface SquareRadicalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareRadical = React.forwardRef<SVGSVGElement, SquareRadicalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M7 12h2l2 5l2-10h4"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

SquareRadical.displayName = "SquareRadical"
