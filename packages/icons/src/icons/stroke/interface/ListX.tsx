
import * as React from "react"

export interface ListXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListX = React.forwardRef<SVGSVGElement, ListXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 5H3m8 7H3m13 7H3m12.5-9.5l5 5m0-5l-5 5"/>` }}
      {...props}
    />
  )
)

ListX.displayName = "ListX"
