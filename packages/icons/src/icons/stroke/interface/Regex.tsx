
import * as React from "react"

export interface RegexProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Regex = React.forwardRef<SVGSVGElement, RegexProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17 3v10m-4.33-7.5l8.66 5m-8.66 0l8.66-5M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"/>` }}
      {...props}
    />
  )
)

Regex.displayName = "Regex"
