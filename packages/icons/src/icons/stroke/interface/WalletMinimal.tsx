
import * as React from "react"

export interface WalletMinimalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WalletMinimal = React.forwardRef<SVGSVGElement, WalletMinimalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 14h.01M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/>` }}
      {...props}
    />
  )
)

WalletMinimal.displayName = "WalletMinimal"
