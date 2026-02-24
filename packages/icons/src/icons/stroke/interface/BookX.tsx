
import * as React from "react"

export interface BookXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookX = React.forwardRef<SVGSVGElement, BookXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m14.5 7l-5 5M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9.5 7l5 5"/>` }}
      {...props}
    />
  )
)

BookX.displayName = "BookX"
