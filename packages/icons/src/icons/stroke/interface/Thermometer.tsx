
import * as React from "react"

export interface ThermometerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Thermometer = React.forwardRef<SVGSVGElement, ThermometerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0"/>` }}
      {...props}
    />
  )
)

Thermometer.displayName = "Thermometer"
