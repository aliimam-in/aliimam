
import * as React from "react"

export interface VectorSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const VectorSquare = React.forwardRef<SVGSVGElement, VectorSquareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19.5 7a24 24 0 0 1 0 10M4.5 7a24 24 0 0 0 0 10M7 19.5a24 24 0 0 0 10 0M7 4.5a24 24 0 0 1 10 0"/><rect width="5" height="5" x="17" y="17" rx="1"/><rect width="5" height="5" x="17" y="2" rx="1"/><rect width="5" height="5" x="2" y="17" rx="1"/><rect width="5" height="5" x="2" y="2" rx="1"/></g>` }}
      {...props}
    />
  )
)

VectorSquare.displayName = "VectorSquare"
