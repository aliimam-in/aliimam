
import * as React from "react"

export interface SpotlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Spotlight = React.forwardRef<SVGSVGElement, SpotlightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15.295 19.562L16 22m1-6l3.758 2.098M19 12.5l3.026-.598M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341zM8 9V2"/>` }}
      {...props}
    />
  )
)

Spotlight.displayName = "Spotlight"
