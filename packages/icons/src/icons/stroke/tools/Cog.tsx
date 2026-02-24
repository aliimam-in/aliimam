
import * as React from "react"

export interface CogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cog = React.forwardRef<SVGSVGElement, CogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 10.27L7 3.34m4 10.39l-4 6.93M12 22v-2m0-18v2m2 8h8m-5 8.66l-1-1.73m1-15.59l-1 1.73M2 12h2m16.66 5l-1.73-1m1.73-9l-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></g>` }}
      {...props}
    />
  )
)

Cog.displayName = "Cog"
