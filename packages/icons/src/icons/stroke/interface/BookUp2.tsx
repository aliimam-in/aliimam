
import * as React from "react"

export interface BookUp2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookUp2 = React.forwardRef<SVGSVGElement, BookUp2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 13V7m6-5h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2M9 10l3-3l3 3M9 5l3-3l3 3"/></g>` }}
      {...props}
    />
  )
)

BookUp2.displayName = "BookUp2"
