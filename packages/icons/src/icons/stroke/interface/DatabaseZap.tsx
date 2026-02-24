
import * as React from "react"

export interface DatabaseZapProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DatabaseZap = React.forwardRef<SVGSVGElement, DatabaseZapProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"/><path d="M3 12a9 3 0 0 0 11.59 2.87"/></g>` }}
      {...props}
    />
  )
)

DatabaseZap.displayName = "DatabaseZap"
