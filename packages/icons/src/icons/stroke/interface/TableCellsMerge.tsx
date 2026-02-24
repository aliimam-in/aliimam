
import * as React from "react"

export interface TableCellsMergeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TableCellsMerge = React.forwardRef<SVGSVGElement, TableCellsMergeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21v-6m0-6V3M3 15h18M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

TableCellsMerge.displayName = "TableCellsMerge"
