
import * as React from "react"

export interface ListProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const List = React.forwardRef<SVGSVGElement, ListProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"/>` }}
      {...props}
    />
  )
)

List.displayName = "List"
