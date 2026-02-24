
import * as React from "react"

export interface ChartNoAxesCombinedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartNoAxesCombined = React.forwardRef<SVGSVGElement, ChartNoAxesCombinedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 16v5m4-7v7m4-11v11m2-18l-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15m2 3v3m4-7v7"/>` }}
      {...props}
    />
  )
)

ChartNoAxesCombined.displayName = "ChartNoAxesCombined"
