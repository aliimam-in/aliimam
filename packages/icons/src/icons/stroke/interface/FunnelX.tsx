
import * as React from "react"

export interface FunnelXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FunnelX = React.forwardRef<SVGSVGElement, FunnelXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473M16.5 3.5l5 5m0-5l-5 5"/>` }}
      {...props}
    />
  )
)

FunnelX.displayName = "FunnelX"
