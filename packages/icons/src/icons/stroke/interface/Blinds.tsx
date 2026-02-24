
import * as React from "react"

export interface BlindsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Blinds = React.forwardRef<SVGSVGElement, BlindsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14"/><circle cx="4" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

Blinds.displayName = "Blinds"
