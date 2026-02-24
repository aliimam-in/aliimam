
import * as React from "react"

export interface AnvilProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Anvil = React.forwardRef<SVGSVGElement, AnvilProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 10H6a4 4 0 0 1-4-4a1 1 0 0 1 1-1h4m0 0a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1a7 7 0 0 1-7 7H8a1 1 0 0 1-1-1zm2 7v5m6-5v5M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"/>` }}
      {...props}
    />
  )
)

Anvil.displayName = "Anvil"
