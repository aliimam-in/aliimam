
import * as React from "react"

export interface ChessPawnProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChessPawn = React.forwardRef<SVGSVGElement, ChessPawnProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm9.5-10l1.5 8m-9-8h10m-9 8l1.5-8"/><circle cx="12" cy="6" r="4"/></g>` }}
      {...props}
    />
  )
)

ChessPawn.displayName = "ChessPawn"
