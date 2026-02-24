
import * as React from "react"

export interface TableCellsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TableCellsSplit = React.forwardRef<SVGSVGElement, TableCellsSplitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V9m-9 6h18M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

TableCellsSplit.displayName = "TableCellsSplit"
