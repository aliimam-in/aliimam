
import * as React from "react"

export interface Navigation2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Navigation2Off = React.forwardRef<SVGSVGElement, Navigation2OffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M9.31 9.31L5 21l7-4l7 4l-1.17-3.17m-3.3-8.95L12 2l-1.17 3.17M2 2l20 20"/>` }}
      {...props}
    />
  )
)

Navigation2Off.displayName = "Navigation2Off"
