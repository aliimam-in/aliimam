
import * as React from "react"

export interface BookSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookSearch = React.forwardRef<SVGSVGElement, BookSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 22H5.5a1 1 0 0 1 0-5h4.501M21 22l-1.879-1.878"/><path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"/><circle cx="17" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

BookSearch.displayName = "BookSearch"
