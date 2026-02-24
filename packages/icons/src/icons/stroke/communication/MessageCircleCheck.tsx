
import * as React from "react"

export interface MessageCircleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageCircleCheck = React.forwardRef<SVGSVGElement, MessageCircleCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"/><path d="m9 12l2 2l4-4"/></g>` }}
      {...props}
    />
  )
)

MessageCircleCheck.displayName = "MessageCircleCheck"
