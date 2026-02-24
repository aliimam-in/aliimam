
import * as React from "react"

export interface SquareCheckBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareCheckBig = React.forwardRef<SVGSVGElement, SquareCheckBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11l3 3L22 4"/></g>` }}
      {...props}
    />
  )
)

SquareCheckBig.displayName = "SquareCheckBig"
