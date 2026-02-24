
import * as React from "react"

export interface StrikethroughProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Strikethrough = React.forwardRef<SVGSVGElement, StrikethroughProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6m-2-8h16"/>` }}
      {...props}
    />
  )
)

Strikethrough.displayName = "Strikethrough"
