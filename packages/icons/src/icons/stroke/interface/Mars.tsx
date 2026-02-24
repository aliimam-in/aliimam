
import * as React from "react"

export interface MarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Mars = React.forwardRef<SVGSVGElement, MarsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5m0-5l-6.75 6.75"/><circle cx="10" cy="14" r="6"/></g>` }}
      {...props}
    />
  )
)

Mars.displayName = "Mars"
