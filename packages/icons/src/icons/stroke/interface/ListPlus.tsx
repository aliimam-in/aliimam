
import * as React from "react"

export interface ListPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListPlus = React.forwardRef<SVGSVGElement, ListPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6"/>` }}
      {...props}
    />
  )
)

ListPlus.displayName = "ListPlus"
