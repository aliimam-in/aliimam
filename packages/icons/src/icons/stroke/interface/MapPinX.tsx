
import * as React from "react"

export interface MapPinXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPinX = React.forwardRef<SVGSVGElement, MapPinXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19.752 11.901A7.8 7.8 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0l.09-.077"/><circle cx="12" cy="10" r="3"/><path d="m21.5 15.5l-5 5m5 0l-5-5"/></g>` }}
      {...props}
    />
  )
)

MapPinX.displayName = "MapPinX"
