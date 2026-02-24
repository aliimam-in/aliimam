
import * as React from "react"

export interface MessageCircleXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageCircleX = React.forwardRef<SVGSVGElement, MessageCircleXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719M15 9l-6 6m0-6l6 6"/>` }}
      {...props}
    />
  )
)

MessageCircleX.displayName = "MessageCircleX"
