
import * as React from "react"

export interface CloudRainProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudRain = React.forwardRef<SVGSVGElement, CloudRainProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6"/>` }}
      {...props}
    />
  )
)

CloudRain.displayName = "CloudRain"
