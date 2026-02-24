
import * as React from "react"

export interface Plug2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Plug2 = React.forwardRef<SVGSVGElement, Plug2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M9 2v6m6-6v6m-3 9v5M5 8h14M6 11V8h12v3a6 6 0 1 1-12 0"/>` }}
      {...props}
    />
  )
)

Plug2.displayName = "Plug2"
