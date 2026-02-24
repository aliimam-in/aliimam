
import * as React from "react"

export interface PauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Pause = React.forwardRef<SVGSVGElement, PauseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="5" height="18" x="14" y="3" rx="1"/><rect width="5" height="18" x="5" y="3" rx="1"/></g>` }}
      {...props}
    />
  )
)

Pause.displayName = "Pause"
