
import * as React from "react"

export interface FlipVertical2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlipVertical2 = React.forwardRef<SVGSVGElement, FlipVertical2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m17 3l-5 5l-5-5zm0 18l-5-5l-5 5zM4 12H2m8 0H8m8 0h-2m8 0h-2"/>` }}
      {...props}
    />
  )
)

FlipVertical2.displayName = "FlipVertical2"
