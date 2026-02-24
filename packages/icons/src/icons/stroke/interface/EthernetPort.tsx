
import * as React from "react"

export interface EthernetPortProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EthernetPort = React.forwardRef<SVGSVGElement, EthernetPortProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m15 20l3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3zM6 8v1m4-1v1m4-1v1m4-1v1"/>` }}
      {...props}
    />
  )
)

EthernetPort.displayName = "EthernetPort"
