
import * as React from "react"

export interface StoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Stone = React.forwardRef<SVGSVGElement, StoneProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"/><path d="M11.99 22L14 12l7.822 3.184M14 12L8.47 2.302"/></g>` }}
      {...props}
    />
  )
)

Stone.displayName = "Stone"
