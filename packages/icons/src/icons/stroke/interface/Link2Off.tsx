
import * as React from "react"

export interface Link2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Link2Off = React.forwardRef<SVGSVGElement, Link2OffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M9 17H7A5 5 0 0 1 7 7m8 0h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20"/>` }}
      {...props}
    />
  )
)

Link2Off.displayName = "Link2Off"
