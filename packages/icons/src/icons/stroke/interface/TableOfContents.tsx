
import * as React from "react"

export interface TableOfContentsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TableOfContents = React.forwardRef<SVGSVGElement, TableOfContentsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 5H3m13 7H3m13 7H3M21 5h.01M21 12h.01M21 19h.01"/>` }}
      {...props}
    />
  )
)

TableOfContents.displayName = "TableOfContents"
