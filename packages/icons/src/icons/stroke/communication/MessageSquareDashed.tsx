
import * as React from "react"

export interface MessageSquareDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageSquareDashed = React.forwardRef<SVGSVGElement, MessageSquareDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 3h2m0 16h-2M2 12v-2m0 6v5.286a.71.71 0 0 0 1.212.502l1.149-1.149M20 19a2 2 0 0 0 2-2v-1m0-6v2m0-6V5a2 2 0 0 0-2-2M4 3a2 2 0 0 0-2 2v1m6 13h2M8 3h2"/>` }}
      {...props}
    />
  )
)

MessageSquareDashed.displayName = "MessageSquareDashed"
