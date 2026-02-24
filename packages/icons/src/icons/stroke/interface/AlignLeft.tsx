
import * as React from "react"

export interface AlignLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignLeft = React.forwardRef<SVGSVGElement, AlignLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 12H3m14 6H3M21 6H3"/>` }}
      {...props}
    />
  )
)

AlignLeft.displayName = "AlignLeft"
