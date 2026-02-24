
import * as React from "react"

export interface ServerCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ServerCog = React.forwardRef<SVGSVGElement, ServerCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10.852 14.772l-.383.923m2.679-.923a3 3 0 1 0-2.296-5.544l-.383-.923m2.679.923l.383-.923"/><path d="m13.53 15.696l-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"/><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5m-15 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 18h.01M6 6h.01m3.218 4.852l-.923-.383m.923 2.679l-.923.383"/></g>` }}
      {...props}
    />
  )
)

ServerCog.displayName = "ServerCog"
