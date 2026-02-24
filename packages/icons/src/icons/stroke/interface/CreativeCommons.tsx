
import * as React from "react"

export interface CreativeCommonsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CreativeCommons = React.forwardRef<SVGSVGElement, CreativeCommonsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M10 9.3a2.8 2.8 0 0 0-3.5 1a3.1 3.1 0 0 0 0 3.4a2.7 2.7 0 0 0 3.5 1m7-5.4a2.8 2.8 0 0 0-3.5 1a3.1 3.1 0 0 0 0 3.4a2.7 2.7 0 0 0 3.5 1"/></g>` }}
      {...props}
    />
  )
)

CreativeCommons.displayName = "CreativeCommons"
