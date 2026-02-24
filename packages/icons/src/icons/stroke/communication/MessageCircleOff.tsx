
import * as React from "react"

export interface MessageCircleOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MessageCircleOff = React.forwardRef<SVGSVGElement, MessageCircleOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m2 2l20 20M4.93 4.929a10 10 0 0 0-1.938 11.412a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 0 0 11.302-1.989M8.35 2.69A10 10 0 0 1 21.3 15.65"/>` }}
      {...props}
    />
  )
)

MessageCircleOff.displayName = "MessageCircleOff"
