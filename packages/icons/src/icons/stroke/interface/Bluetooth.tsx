
import * as React from "react"

export interface BluetoothProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bluetooth = React.forwardRef<SVGSVGElement, BluetoothProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 7l10 10l-5 5V2l5 5L7 17"/>` }}
      {...props}
    />
  )
)

Bluetooth.displayName = "Bluetooth"
