
import * as React from "react"

export interface MapPinCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPinCheck = React.forwardRef<SVGSVGElement, MapPinCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .813-.728"/><circle cx="12" cy="10" r="3"/><path d="m16 18l2 2l4-4"/></g>` }}
      {...props}
    />
  )
)

MapPinCheck.displayName = "MapPinCheck"
