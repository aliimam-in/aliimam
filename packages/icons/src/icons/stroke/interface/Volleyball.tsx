
import * as React from "react"

export interface VolleyballProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Volleyball = React.forwardRef<SVGSVGElement, VolleyballProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5m13.5-3.4a16.55 16.55 0 0 1-9 7.5"/><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5a13.3 13.3 0 0 1 0-10M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/><circle cx="12" cy="12" r="10"/></g>` }}
      {...props}
    />
  )
)

Volleyball.displayName = "Volleyball"
