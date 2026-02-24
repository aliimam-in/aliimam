
import * as React from "react"

export interface BluetoothOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BluetoothOff = React.forwardRef<SVGSVGElement, BluetoothOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m17 17l-5 5V12l-5 5M2 2l20 20M14.5 9.5L17 7l-5-5v4.5"/>` }}
      {...props}
    />
  )
)

BluetoothOff.displayName = "BluetoothOff"
