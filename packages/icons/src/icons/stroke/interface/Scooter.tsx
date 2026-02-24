
import * as React from "react"

export interface ScooterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Scooter = React.forwardRef<SVGSVGElement, ScooterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 4h-3.5l2 11.05M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009"/><circle cx="19.5" cy="17.5" r="2.5"/><circle cx="4.5" cy="17.5" r="2.5"/></g>` }}
      {...props}
    />
  )
)

Scooter.displayName = "Scooter"
