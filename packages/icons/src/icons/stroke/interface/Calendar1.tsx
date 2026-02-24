
import * as React from "react"

export interface Calendar1Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Calendar1 = React.forwardRef<SVGSVGElement, Calendar1Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 14h1v4m4-16v4M3 10h18M8 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/></g>` }}
      {...props}
    />
  )
)

Calendar1.displayName = "Calendar1"
