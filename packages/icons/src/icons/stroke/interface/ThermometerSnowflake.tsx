
import * as React from "react"

export interface ThermometerSnowflakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ThermometerSnowflake = React.forwardRef<SVGSVGElement, ThermometerSnowflakeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m4.585 9H10m-8-3h6.5L10 9m10 5.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h2"/></g>` }}
      {...props}
    />
  )
)

ThermometerSnowflake.displayName = "ThermometerSnowflake"
