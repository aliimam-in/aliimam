
import * as React from "react"

export interface AlignEndVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignEndVertical = React.forwardRef<SVGSVGElement, AlignEndVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="6" x="2" y="4" rx="2"/><rect width="9" height="6" x="9" y="14" rx="2"/><path d="M22 22V2"/></g>` }}
      {...props}
    />
  )
)

AlignEndVertical.displayName = "AlignEndVertical"
