
import * as React from "react"

export interface HeartOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HeartOff = React.forwardRef<SVGSVGElement, HeartOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655m-2.846 2.812l-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761M2 2l20 20"/>` }}
      {...props}
    />
  )
)

HeartOff.displayName = "HeartOff"
