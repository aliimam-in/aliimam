
import * as React from "react"

export interface BirdhouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Birdhouse = React.forwardRef<SVGSVGElement, BirdhouseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 18v4m5-4l1.956-11.468M3 8l7.82-5.615a2 2 0 0 1 2.36 0L21 8M4 18h16M7 18L5.044 6.532"/><circle cx="12" cy="10" r="2"/></g>` }}
      {...props}
    />
  )
)

Birdhouse.displayName = "Birdhouse"
