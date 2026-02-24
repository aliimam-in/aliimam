
import * as React from "react"

export interface MessageCircleReplyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageCircleReply = React.forwardRef<SVGSVGElement, MessageCircleReplyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"/><path d="m10 15l-3-3l3-3"/><path d="M7 12h8a2 2 0 0 1 2 2v1"/></g>` }}
      {...props}
    />
  )
)

MessageCircleReply.displayName = "MessageCircleReply"
