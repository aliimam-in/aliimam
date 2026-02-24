
import * as React from "react"

export interface ShrimpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Shrimp = React.forwardRef<SVGSVGElement, ShrimpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 12h.01M13 22c.5-.5 1.12-1 2.5-1c-1.38 0-2-.5-2.5-1m1-18a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13a1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"/><path d="M14 8a8.5 8.5 0 0 1 0 8m2 0c2 0 4.5-4 4-6"/></g>` }}
      {...props}
    />
  )
)

Shrimp.displayName = "Shrimp"
