
import * as React from "react"

export interface CloudDrizzleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudDrizzle = React.forwardRef<SVGSVGElement, CloudDrizzleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v1m0-6v1m8 4v1m0-6v1m-4 6v1m0-6v1"/>` }}
      {...props}
    />
  )
)

CloudDrizzle.displayName = "CloudDrizzle"
