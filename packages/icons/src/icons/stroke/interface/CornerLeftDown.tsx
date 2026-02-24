
import * as React from "react"

export interface CornerLeftDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CornerLeftDown = React.forwardRef<SVGSVGElement, CornerLeftDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14 15l-5 5l-5-5"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/></g>` }}
      {...props}
    />
  )
)

CornerLeftDown.displayName = "CornerLeftDown"
