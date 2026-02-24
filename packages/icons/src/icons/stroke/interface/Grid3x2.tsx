
import * as React from "react"

export interface Grid3x2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Grid3x2 = React.forwardRef<SVGSVGElement, Grid3x2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3v18M3 12h18M9 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

Grid3x2.displayName = "Grid3x2"
