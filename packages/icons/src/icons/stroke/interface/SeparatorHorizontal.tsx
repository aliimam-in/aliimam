
import * as React from "react"

export interface SeparatorHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SeparatorHorizontal = React.forwardRef<SVGSVGElement, SeparatorHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 16l-4 4l-4-4m-5-4h18M8 8l4-4l4 4"/>` }}
      {...props}
    />
  )
)

SeparatorHorizontal.displayName = "SeparatorHorizontal"
