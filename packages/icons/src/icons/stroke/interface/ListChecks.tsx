
import * as React from "react"

export interface ListChecksProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListChecks = React.forwardRef<SVGSVGElement, ListChecksProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4"/>` }}
      {...props}
    />
  )
)

ListChecks.displayName = "ListChecks"
