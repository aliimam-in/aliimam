
import * as React from "react"

export interface MessageSquareShareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareShare = React.forwardRef<SVGSVGElement, MessageSquareShareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4M16 3h6v6m-6 0l6-6"/>` }}
      {...props}
    />
  )
)

MessageSquareShare.displayName = "MessageSquareShare"
