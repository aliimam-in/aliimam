
import * as React from "react"

export interface RockingChairProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RockingChair = React.forwardRef<SVGSVGElement, RockingChairProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m15 13l3.708 7.416M3 19a15 15 0 0 0 18 0M3 2l3.21 9.633A2 2 0 0 0 8.109 13H18m-9 0l-3.708 7.416"/>` }}
      {...props}
    />
  )
)

RockingChair.displayName = "RockingChair"
