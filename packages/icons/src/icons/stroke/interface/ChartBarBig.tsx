
import * as React from "react"

export interface ChartBarBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartBarBig = React.forwardRef<SVGSVGElement, ChartBarBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect width="9" height="4" x="7" y="13" rx="1"/><rect width="12" height="4" x="7" y="5" rx="1"/></g>` }}
      {...props}
    />
  )
)

ChartBarBig.displayName = "ChartBarBig"
