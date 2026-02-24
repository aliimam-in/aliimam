
import * as React from "react"

export interface MessageSquareMoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareMore = React.forwardRef<SVGSVGElement, MessageSquareMoreProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-10-6h.01M16 11h.01M8 11h.01"/>` }}
      {...props}
    />
  )
)

MessageSquareMore.displayName = "MessageSquareMore"
