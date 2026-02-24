
import * as React from "react"

export interface CopyrightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Copyright = React.forwardRef<SVGSVGElement, CopyrightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></g>` }}
      {...props}
    />
  )
)

Copyright.displayName = "Copyright"
