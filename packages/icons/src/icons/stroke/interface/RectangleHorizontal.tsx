
import * as React from "react"

export interface RectangleHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RectangleHorizontal = React.forwardRef<SVGSVGElement, RectangleHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<rect width="20" height="12" x="2" y="6" fill="none" stroke="currentColor" stroke-width="2" rx="2"/>` }}
      {...props}
    />
  )
)

RectangleHorizontal.displayName = "RectangleHorizontal"
