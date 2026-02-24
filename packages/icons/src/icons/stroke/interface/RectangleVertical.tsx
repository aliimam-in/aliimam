
import * as React from "react"

export interface RectangleVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RectangleVertical = React.forwardRef<SVGSVGElement, RectangleVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<rect width="12" height="20" x="6" y="2" fill="none" stroke="currentColor" stroke-width="2" rx="2"/>` }}
      {...props}
    />
  )
)

RectangleVertical.displayName = "RectangleVertical"
