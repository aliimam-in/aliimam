
import * as React from "react"

export interface TruckElectricProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TruckElectric = React.forwardRef<SVGSVGElement, TruckElectricProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 19V7a2 2 0 0 0-2-2H9m6 14H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14M2 13v5a1 1 0 0 0 1 1h2M4 3L2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

TruckElectric.displayName = "TruckElectric"
