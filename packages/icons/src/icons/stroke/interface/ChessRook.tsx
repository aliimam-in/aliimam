
import * as React from "react"

export interface ChessRookProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChessRook = React.forwardRef<SVGSVGElement, ChessRookProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm5-18v2m4-2v2m3 14l-1-9M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2M6 4h12M7 18l1-9"/>` }}
      {...props}
    />
  )
)

ChessRook.displayName = "ChessRook"
