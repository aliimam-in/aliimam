
import * as React from "react"

export interface HandGrabProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HandGrab = React.forwardRef<SVGSVGElement, HandGrabProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0-.1V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5m0 0a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8a2 2 0 1 1 4 0"/></g>` }}
      {...props}
    />
  )
)

HandGrab.displayName = "HandGrab"
