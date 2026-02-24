
import * as React from "react"

export interface CitrusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Citrus = React.forwardRef<SVGSVGElement, CitrusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"/><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5"/><path d="M14 17.85V10H6.15"/></g>` }}
      {...props}
    />
  )
)

Citrus.displayName = "Citrus"
