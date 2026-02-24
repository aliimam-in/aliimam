
import * as React from "react"

export interface MessageSquareHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareHeart = React.forwardRef<SVGSVGElement, MessageSquareHeartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314a1 1 0 0 0 .783-.004a1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5A2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"/></g>` }}
      {...props}
    />
  )
)

MessageSquareHeart.displayName = "MessageSquareHeart"
