
import * as React from "react"

export interface VenusAndMarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const VenusAndMars = React.forwardRef<SVGSVGElement, VenusAndMarsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20h4m-2-4v6m5-20h4v4m0-4l-5.46 5.46"/><circle cx="12" cy="11" r="5"/></g>` }}
      {...props}
    />
  )
)

VenusAndMars.displayName = "VenusAndMars"
