
import * as React from "react"

export interface CaptionsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Captions = React.forwardRef<SVGSVGElement, CaptionsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4m4 0h2M7 11h2m4 0h4"/></g>` }}
      {...props}
    />
  )
)

Captions.displayName = "Captions"
