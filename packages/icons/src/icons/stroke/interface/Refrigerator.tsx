
import * as React from "react"

export interface RefrigeratorProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Refrigerator = React.forwardRef<SVGSVGElement, RefrigeratorProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0 4h14m-4-3v6"/>` }}
      {...props}
    />
  )
)

Refrigerator.displayName = "Refrigerator"
