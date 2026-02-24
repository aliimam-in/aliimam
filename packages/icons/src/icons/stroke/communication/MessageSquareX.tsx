
import * as React from "react"

export interface MessageSquareXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareX = React.forwardRef<SVGSVGElement, MessageSquareXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-7.5-8.5l-5 5m0-5l5 5"/>` }}
      {...props}
    />
  )
)

MessageSquareX.displayName = "MessageSquareX"
