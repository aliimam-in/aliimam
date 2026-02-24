
import * as React from "react"

export interface ListRestartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListRestart = React.forwardRef<SVGSVGElement, ListRestartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 5H3m4 7H3m4 7H3m9-1a5 5 0 0 0 9-3a4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/></g>` }}
      {...props}
    />
  )
)

ListRestart.displayName = "ListRestart"
