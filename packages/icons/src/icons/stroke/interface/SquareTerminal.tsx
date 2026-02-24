
import * as React from "react"

export interface SquareTerminalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareTerminal = React.forwardRef<SVGSVGElement, SquareTerminalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m7 11l2-2l-2-2m4 6h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></g>` }}
      {...props}
    />
  )
)

SquareTerminal.displayName = "SquareTerminal"
