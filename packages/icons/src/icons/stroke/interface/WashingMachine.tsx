
import * as React from "react"

export interface WashingMachineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WashingMachine = React.forwardRef<SVGSVGElement, WashingMachineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h3m11 0h.01"/><rect width="18" height="20" x="3" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M12 18a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 1 0-5"/></g>` }}
      {...props}
    />
  )
)

WashingMachine.displayName = "WashingMachine"
