
import * as React from "react"

export interface CastleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Castle = React.forwardRef<SVGSVGElement, CastleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 5V3m4 2V3m1 18v-3a3 3 0 0 0-6 0v3m9-18v8m0-6H6m16 6H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9m4-6v8"/></g>` }}
      {...props}
    />
  )
)

Castle.displayName = "Castle"
