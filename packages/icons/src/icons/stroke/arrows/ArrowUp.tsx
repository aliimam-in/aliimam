
import * as React from "react"

export interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUp = React.forwardRef<SVGSVGElement, ArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m5 12l7-7l7 7m-7 7V5"/>` }}
      {...props}
    />
  )
)

ArrowUp.displayName = "ArrowUp"
