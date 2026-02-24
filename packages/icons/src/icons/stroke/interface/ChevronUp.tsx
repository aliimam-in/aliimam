
import * as React from "react"

export interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronUp = React.forwardRef<SVGSVGElement, ChevronUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m18 15l-6-6l-6 6"/>` }}
      {...props}
    />
  )
)

ChevronUp.displayName = "ChevronUp"
