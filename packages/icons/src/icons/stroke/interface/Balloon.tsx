
import * as React from "react"

export interface BalloonProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Balloon = React.forwardRef<SVGSVGElement, BalloonProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1M12 6a2 2 0 0 1 2 2"/><path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0"/></g>` }}
      {...props}
    />
  )
)

Balloon.displayName = "Balloon"
