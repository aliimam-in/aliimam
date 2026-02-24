
import * as React from "react"

export interface DoorClosedLockedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DoorClosedLocked = React.forwardRef<SVGSVGElement, DoorClosedLockedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h8m10-3v-2a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="17" rx="1"/></g>` }}
      {...props}
    />
  )
)

DoorClosedLocked.displayName = "DoorClosedLocked"
