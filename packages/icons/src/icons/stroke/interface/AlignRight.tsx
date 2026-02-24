
import * as React from "react"

export interface AlignRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignRight = React.forwardRef<SVGSVGElement, AlignRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 12H9m12 6H7M21 6H3"/>` }}
      {...props}
    />
  )
)

AlignRight.displayName = "AlignRight"
