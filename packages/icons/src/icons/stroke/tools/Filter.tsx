
import * as React from "react"

export interface FilterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Filter = React.forwardRef<SVGSVGElement, FilterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 3H2l8 9.46V19l4 2v-8.54z"/>` }}
      {...props}
    />
  )
)

Filter.displayName = "Filter"
