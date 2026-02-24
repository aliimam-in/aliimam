
import * as React from "react"

export interface RedoDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RedoDot = React.forwardRef<SVGSVGElement, RedoDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7"/></g>` }}
      {...props}
    />
  )
)

RedoDot.displayName = "RedoDot"
