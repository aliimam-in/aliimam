
import * as React from "react"

export interface TentProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tent = React.forwardRef<SVGSVGElement, TentProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20"/>` }}
      {...props}
    />
  )
)

Tent.displayName = "Tent"
