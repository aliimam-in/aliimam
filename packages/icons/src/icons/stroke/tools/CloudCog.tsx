
import * as React from "react"

export interface CloudCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudCog = React.forwardRef<SVGSVGElement, CloudCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10.852 19.772l-.383.924m2.679-6.468l.383-.923m-.383 6.467a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696l-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-10.772-.348l-.923-.383m.923 2.679l-.923.383"/></g>` }}
      {...props}
    />
  )
)

CloudCog.displayName = "CloudCog"
