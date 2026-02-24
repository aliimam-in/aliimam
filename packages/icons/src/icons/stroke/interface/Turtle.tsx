
import * as React from "react"

export interface TurtleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Turtle = React.forwardRef<SVGSVGElement, TurtleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m12 10l2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9L8 10m7.18-2.1L12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></g>` }}
      {...props}
    />
  )
)

Turtle.displayName = "Turtle"
