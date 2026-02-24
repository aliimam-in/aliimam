
import * as React from "react"

export interface HeaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Heater = React.forwardRef<SVGSVGElement, HeaterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 8c2-3-2-3 0-6m4.5 6c2-3-2-3 0-6M6 10h.01M6 14h.01M10 16v-4m4 4v-4m4 4v-4"/><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M5 20v2m14-2v2"/></g>` }}
      {...props}
    />
  )
)

Heater.displayName = "Heater"
