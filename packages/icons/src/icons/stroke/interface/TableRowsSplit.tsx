
import * as React from "react"

export interface TableRowsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TableRowsSplit = React.forwardRef<SVGSVGElement, TableRowsSplitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 10h2m-1 12v-8m0-12v4M2 10h2m16 0h2M3 19h18M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2M8 10h2M9 22v-8M9 2v4"/>` }}
      {...props}
    />
  )
)

TableRowsSplit.displayName = "TableRowsSplit"
