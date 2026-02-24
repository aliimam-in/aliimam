
import * as React from "react"

export interface BuildingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Building = React.forwardRef<SVGSVGElement, BuildingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect width="16" height="20" x="4" y="2" rx="2"/></g>` }}
      {...props}
    />
  )
)

Building.displayName = "Building"
