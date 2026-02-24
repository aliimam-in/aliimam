
import * as React from "react"

export interface BluetoothSearchingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BluetoothSearching = React.forwardRef<SVGSVGElement, BluetoothSearchingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 7l10 10l-5 5V2l5 5L7 17m13.83-2.17a4 4 0 0 0 0-5.66M18 12h.01"/>` }}
      {...props}
    />
  )
)

BluetoothSearching.displayName = "BluetoothSearching"
