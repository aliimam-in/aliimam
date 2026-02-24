
import * as React from "react"

export interface ThermometerSunProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ThermometerSun = React.forwardRef<SVGSVGElement, ThermometerSunProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v2m0 4a4 4 0 0 0-1.645 7.647M2 12h2m16 2.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0zM4.93 4.93l1.41 1.41m0 11.32l-1.41 1.41"/>` }}
      {...props}
    />
  )
)

ThermometerSun.displayName = "ThermometerSun"
