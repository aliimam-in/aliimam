
import * as React from "react"

export interface PocketProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Pocket = React.forwardRef<SVGSVGElement, PocketProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"/><path d="m8 10l4 4l4-4"/></g>` }}
      {...props}
    />
  )
)

Pocket.displayName = "Pocket"
