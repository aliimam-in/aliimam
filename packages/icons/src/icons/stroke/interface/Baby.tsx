
import * as React from "react"

export interface BabyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Baby = React.forwardRef<SVGSVGElement, BabyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5m1-4h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1m-3 5h.01"/></g>` }}
      {...props}
    />
  )
)

Baby.displayName = "Baby"
