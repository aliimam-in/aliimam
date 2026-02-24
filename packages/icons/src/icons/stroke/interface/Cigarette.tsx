
import * as React from "react"

export interface CigaretteProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cigarette = React.forwardRef<SVGSVGElement, CigaretteProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14m1-8c0-2.5-2-2.5-2-5m5 13a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m1-4c0-2.5-2-2.5-2-5M7 12v4"/>` }}
      {...props}
    />
  )
)

Cigarette.displayName = "Cigarette"
