
import * as React from "react"

export interface CloudMoonRainProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudMoonRain = React.forwardRef<SVGSVGElement, CloudMoonRainProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11 20v2m7.376-7.488a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M7 19v2"/>` }}
      {...props}
    />
  )
)

CloudMoonRain.displayName = "CloudMoonRain"
