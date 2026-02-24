
import * as React from "react"

export interface TableColumnsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TableColumnsSplit = React.forwardRef<SVGSVGElement, TableColumnsSplitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 14v2m0 4v2m0-20v2m0 4v2M2 15h8M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2M2 9h8m12 6h-4m4-12h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2m0-12h-4M5 3v18"/>` }}
      {...props}
    />
  )
)

TableColumnsSplit.displayName = "TableColumnsSplit"
