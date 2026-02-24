
import * as React from "react"

export interface ChessBishopProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChessBishop = React.forwardRef<SVGSVGElement, ChessBishopProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm10-2c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2C9.5 4.462 6 8.77 6 13.077C6 15.539 7.5 17.385 9 18m7-11l-2.5 2.5M9 2h6"/>` }}
      {...props}
    />
  )
)

ChessBishop.displayName = "ChessBishop"
