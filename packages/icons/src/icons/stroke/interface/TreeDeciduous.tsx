
import * as React from "react"

export interface TreeDeciduousProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TreeDeciduous = React.forwardRef<SVGSVGElement, TreeDeciduousProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Zm4 0v3"/>` }}
      {...props}
    />
  )
)

TreeDeciduous.displayName = "TreeDeciduous"
