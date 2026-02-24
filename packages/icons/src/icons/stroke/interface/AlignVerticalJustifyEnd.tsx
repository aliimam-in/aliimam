
import * as React from "react"

export interface AlignVerticalJustifyEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignVerticalJustifyEnd = React.forwardRef<SVGSVGElement, AlignVerticalJustifyEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="6" x="5" y="12" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 22h20"/></g>` }}
      {...props}
    />
  )
)

AlignVerticalJustifyEnd.displayName = "AlignVerticalJustifyEnd"
