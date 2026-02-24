
import * as React from "react"

export interface ChessKnightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChessKnight = React.forwardRef<SVGSVGElement, ChessKnightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm11.5-2c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456M15 5l1.425-1.425M17 8l1.53-1.53m-8.817 5.715L7 18"/>` }}
      {...props}
    />
  )
)

ChessKnight.displayName = "ChessKnight"
