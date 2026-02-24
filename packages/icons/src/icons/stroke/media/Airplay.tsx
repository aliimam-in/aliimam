
import * as React from "react"

export interface AirplayProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Airplay = React.forwardRef<SVGSVGElement, AirplayProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15l5 6H7Z"/></g>` }}
      {...props}
    />
  )
)

Airplay.displayName = "Airplay"
