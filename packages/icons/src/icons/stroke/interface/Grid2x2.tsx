
import * as React from "react"

export interface Grid2x2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Grid2x2 = React.forwardRef<SVGSVGElement, Grid2x2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18m-9-9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

Grid2x2.displayName = "Grid2x2"
