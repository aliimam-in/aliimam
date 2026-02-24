
import * as React from "react"

export interface Columns3CogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Columns3Cog = React.forwardRef<SVGSVGElement, Columns3CogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1l1-.4M15 3v7.5m.2 6.4l-.9-.3m2.3 5.1l.3-.9m-.1-5.5l-.4-1m2.7.9l.3-.9m.2 7.4l-.4-1m1.5-3.9l1-.4m0 3l-.9-.3M9 3v18"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

Columns3Cog.displayName = "Columns3Cog"
