
import * as React from "react"

export interface MessageSquareReplyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareReply = React.forwardRef<SVGSVGElement, MessageSquareReplyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8l-3 3l3 3"/><path d="M17 14v-1a2 2 0 0 0-2-2H7"/></g>` }}
      {...props}
    />
  )
)

MessageSquareReply.displayName = "MessageSquareReply"
