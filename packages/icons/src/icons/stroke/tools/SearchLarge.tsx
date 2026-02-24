
import * as React from "react"

export interface SearchLargeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SearchLarge = React.forwardRef<SVGSVGElement, SearchLargeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none"><path clip-rule="evenodd" d="M18.874 19.581a6 6 0 1 1 .707-.707l4.273 4.272l-.708.708zM20 15a5 5 0 1 1-10 0a5 5 0 0 1 10 0z" fill="currentColor" fill-rule="evenodd"/></g>` }}
      {...props}
    />
  )
)

SearchLarge.displayName = "SearchLarge"
