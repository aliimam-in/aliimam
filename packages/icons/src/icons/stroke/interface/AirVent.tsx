
import * as React from "react"

export interface AirVentProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AirVent = React.forwardRef<SVGSVGElement, AirVentProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12m-8 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12M6.6 15.572A2 2 0 1 0 10 17v-5"/>` }}
      {...props}
    />
  )
)

AirVent.displayName = "AirVent"
