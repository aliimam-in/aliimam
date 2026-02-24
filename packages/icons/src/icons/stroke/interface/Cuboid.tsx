
import * as React from "react"

export interface CuboidProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cuboid = React.forwardRef<SVGSVGElement, CuboidProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m21.12 6.4l-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66"/><path d="M10 22v-8L2.25 9.15M10 14l11.77-6.87"/></g>` }}
      {...props}
    />
  )
)

Cuboid.displayName = "Cuboid"
