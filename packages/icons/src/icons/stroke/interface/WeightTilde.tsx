
import * as React from "react"

export interface WeightTildeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WeightTilde = React.forwardRef<SVGSVGElement, WeightTildeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z"/><path d="M7.999 15a2.5 2.5 0 0 1 4 0a2.5 2.5 0 0 0 4 0"/><circle cx="12" cy="5" r="3"/></g>` }}
      {...props}
    />
  )
)

WeightTilde.displayName = "WeightTilde"
