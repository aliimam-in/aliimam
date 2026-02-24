
import * as React from "react"

export interface SpaceProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Space = React.forwardRef<SVGSVGElement, SpaceProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/>` }}
      {...props}
    />
  )
)

Space.displayName = "Space"
