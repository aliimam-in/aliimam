
import * as React from "react"

export interface VeganProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Vegan = React.forwardRef<SVGSVGElement, VeganProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8q6 0 6-6q-6 0-6 6"/><path d="M17.41 3.59a10 10 0 1 0 3 3"/><path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"/></g>` }}
      {...props}
    />
  )
)

Vegan.displayName = "Vegan"
