
import * as React from "react"

export interface TheaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Theater = React.forwardRef<SVGSVGElement, TheaterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10s3-3 3-8m17 8s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8m12-8c0 4.4 3.6 8 8 8M2 10s2 2 2 5m18-5s-2 2-2 5M8 15h8M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m4 0v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/></g>` }}
      {...props}
    />
  )
)

Theater.displayName = "Theater"
