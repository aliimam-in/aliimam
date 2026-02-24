
import * as React from "react"

export interface LayoutListProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LayoutList = React.forwardRef<SVGSVGElement, LayoutListProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"/></g>` }}
      {...props}
    />
  )
)

LayoutList.displayName = "LayoutList"
