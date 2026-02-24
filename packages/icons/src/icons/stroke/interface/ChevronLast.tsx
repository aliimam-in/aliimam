
import * as React from "react"

export interface ChevronLastProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronLast = React.forwardRef<SVGSVGElement, ChevronLastProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 18l6-6l-6-6m10 0v12"/>` }}
      {...props}
    />
  )
)

ChevronLast.displayName = "ChevronLast"
