
import * as React from "react"

export interface UsbProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Usb = React.forwardRef<SVGSVGElement, UsbProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3L19 5m2-2l-3 1l2 2ZM9.26 7.68L5 12l2 5m3-3l5 2l3.5-3.5"/><path d="m18 12l1-1l1 1l-1 1Z"/></g>` }}
      {...props}
    />
  )
)

Usb.displayName = "Usb"
