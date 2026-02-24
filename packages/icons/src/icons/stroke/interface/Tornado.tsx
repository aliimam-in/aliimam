
import * as React from "react"

export interface TornadoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tornado = React.forwardRef<SVGSVGElement, TornadoProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 4H3m15 4H6m13 4H9m7 4h-6m1 4H9"/>` }}
      {...props}
    />
  )
)

Tornado.displayName = "Tornado"
