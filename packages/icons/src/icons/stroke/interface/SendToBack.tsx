
import * as React from "react"

export interface SendToBackProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SendToBack = React.forwardRef<SVGSVGElement, SendToBackProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="8" x="14" y="14" rx="2"/><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M7 14v1a2 2 0 0 0 2 2h1m4-10h1a2 2 0 0 1 2 2v1"/></g>` }}
      {...props}
    />
  )
)

SendToBack.displayName = "SendToBack"
