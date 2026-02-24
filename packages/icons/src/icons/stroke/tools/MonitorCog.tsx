
import * as React from "react"

export interface MonitorCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorCog = React.forwardRef<SVGSVGElement, MonitorCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v4m2.305-13.47l.923-.382m0-2.296l-.923-.383m2.547-1.241l-.383-.924m.383 6.468l-.383.923m2.679-6.467l.383-.924m-.001 7.392l-.382-.924m1.624-3.92l.924-.383m-.924 2.679l.924.383M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8"/><circle cx="18" cy="6" r="3"/></g>` }}
      {...props}
    />
  )
)

MonitorCog.displayName = "MonitorCog"
