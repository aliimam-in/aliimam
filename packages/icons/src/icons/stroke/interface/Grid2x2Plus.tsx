
import * as React from "react"

export interface Grid2x2PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Grid2x2Plus = React.forwardRef<SVGSVGElement, Grid2x2PlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7h6m-3 3v-6"/>` }}
      {...props}
    />
  )
)

Grid2x2Plus.displayName = "Grid2x2Plus"
