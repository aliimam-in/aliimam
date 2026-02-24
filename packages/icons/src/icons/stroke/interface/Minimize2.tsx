
import * as React from "react"

export interface Minimize2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Minimize2 = React.forwardRef<SVGSVGElement, Minimize2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"/>` }}
      {...props}
    />
  )
)

Minimize2.displayName = "Minimize2"
