
import * as React from "react"

export interface EclipseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Eclipse = React.forwardRef<SVGSVGElement, EclipseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/></g>` }}
      {...props}
    />
  )
)

Eclipse.displayName = "Eclipse"
