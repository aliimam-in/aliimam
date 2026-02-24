
import * as React from "react"

export interface DoorClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DoorClosed = React.forwardRef<SVGSVGElement, DoorClosedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 12h.01M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h20"/>` }}
      {...props}
    />
  )
)

DoorClosed.displayName = "DoorClosed"
