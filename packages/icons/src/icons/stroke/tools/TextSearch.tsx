
import * as React from "react"

export interface TextSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TextSearch = React.forwardRef<SVGSVGElement, TextSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 5H3m7 7H3m7 7H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19l-1.9-1.9"/></g>` }}
      {...props}
    />
  )
)

TextSearch.displayName = "TextSearch"
