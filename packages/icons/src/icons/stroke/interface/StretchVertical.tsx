
import * as React from "react"

export interface StretchVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const StretchVertical = React.forwardRef<SVGSVGElement, StretchVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="6" height="20" x="4" y="2" rx="2"/><rect width="6" height="20" x="14" y="2" rx="2"/></g>` }}
      {...props}
    />
  )
)

StretchVertical.displayName = "StretchVertical"
