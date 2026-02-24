
import * as React from "react"

export interface VenusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Venus = React.forwardRef<SVGSVGElement, VenusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v7m-3-3h6"/><circle cx="12" cy="9" r="6"/></g>` }}
      {...props}
    />
  )
)

Venus.displayName = "Venus"
