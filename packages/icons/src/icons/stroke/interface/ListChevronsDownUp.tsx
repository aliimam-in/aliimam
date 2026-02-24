
import * as React from "react"

export interface ListChevronsDownUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListChevronsDownUp = React.forwardRef<SVGSVGElement, ListChevronsDownUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 5h8m-8 7h8m-8 7h8m4-14l3 3l3-3m-6 14l3-3l3 3"/>` }}
      {...props}
    />
  )
)

ListChevronsDownUp.displayName = "ListChevronsDownUp"
