
import * as React from "react"

export interface AlignEndHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignEndHorizontal = React.forwardRef<SVGSVGElement, AlignEndHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="6" height="16" x="4" y="2" rx="2"/><rect width="6" height="9" x="14" y="9" rx="2"/><path d="M22 22H2"/></g>` }}
      {...props}
    />
  )
)

AlignEndHorizontal.displayName = "AlignEndHorizontal"
