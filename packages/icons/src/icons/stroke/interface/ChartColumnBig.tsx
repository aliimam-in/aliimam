
import * as React from "react"

export interface ChartColumnBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartColumnBig = React.forwardRef<SVGSVGElement, ChartColumnBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect width="4" height="12" x="15" y="5" rx="1"/><rect width="4" height="9" x="7" y="8" rx="1"/></g>` }}
      {...props}
    />
  )
)

ChartColumnBig.displayName = "ChartColumnBig"
