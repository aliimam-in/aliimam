
import * as React from "react"

export interface ScanHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ScanHeart = React.forwardRef<SVGSVGElement, ScanHeartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 3h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 18H5a2 2 0 0 1-2-2v-2m4.828-3.93A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"/>` }}
      {...props}
    />
  )
)

ScanHeart.displayName = "ScanHeart"
