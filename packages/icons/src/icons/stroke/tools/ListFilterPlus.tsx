
import * as React from "react"

export interface ListFilterPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListFilterPlus = React.forwardRef<SVGSVGElement, ListFilterPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 5H2m4 7h12m-9 7h6m1-14h6m-3 3V2"/>` }}
      {...props}
    />
  )
)

ListFilterPlus.displayName = "ListFilterPlus"
