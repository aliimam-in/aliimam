
import * as React from "react"

export interface ChessQueenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChessQueen = React.forwardRef<SVGSVGElement, ChessQueenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm8.474-14.057l1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402M20 9l-3 9M5.594 8.209l2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34M7 18L4 9"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="7" r="2"/></g>` }}
      {...props}
    />
  )
)

ChessQueen.displayName = "ChessQueen"
