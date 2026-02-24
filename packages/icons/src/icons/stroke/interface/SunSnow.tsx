
import * as React from "react"

export interface SunSnowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SunSnow = React.forwardRef<SVGSVGElement, SunSnowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5l1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21l-3-6l1.5-3H22m-5-9l-3 6l1.5 3M2 12h1"/><path d="m20 10l-1.5 2l1.5 2M3.64 18.36l.7-.7m0-11.32l-.7-.7"/></g>` }}
      {...props}
    />
  )
)

SunSnow.displayName = "SunSnow"
