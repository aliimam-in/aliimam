
import * as React from "react"

export interface FlipHorizontal2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlipHorizontal2 = React.forwardRef<SVGSVGElement, FlipHorizontal2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 7l5 5l-5 5zm18 0l-5 5l5 5zm-9 13v2m0-8v2m0-8v2m0-8v2"/>` }}
      {...props}
    />
  )
)

FlipHorizontal2.displayName = "FlipHorizontal2"
