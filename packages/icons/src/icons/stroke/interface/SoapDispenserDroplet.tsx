
import * as React from "react"

export interface SoapDispenserDropletProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SoapDispenserDroplet = React.forwardRef<SVGSVGElement, SoapDispenserDropletProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.5 2v4M14 2H7a2 2 0 0 0-2 2m14.29 10.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19c0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>` }}
      {...props}
    />
  )
)

SoapDispenserDroplet.displayName = "SoapDispenserDroplet"
