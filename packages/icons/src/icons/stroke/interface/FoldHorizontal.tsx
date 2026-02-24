
import * as React from "react"

export interface FoldHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FoldHorizontal = React.forwardRef<SVGSVGElement, FoldHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h6m14 0h-6M12 2v2m0 4v2m0 4v2m0 4v2m7-13l-3 3l3 3M5 15l3-3l-3-3"/>` }}
      {...props}
    />
  )
)

FoldHorizontal.displayName = "FoldHorizontal"
