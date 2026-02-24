
import * as React from "react"

export interface FunnelPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FunnelPlus = React.forwardRef<SVGSVGElement, FunnelPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348M16 6h6m-3-3v6"/>` }}
      {...props}
    />
  )
)

FunnelPlus.displayName = "FunnelPlus"
