
import * as React from "react"

export interface CombineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Combine = React.forwardRef<SVGSVGElement, CombineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m5-7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M7 15l3 3m-3 3l3-3H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="3" rx="1"/></g>` }}
      {...props}
    />
  )
)

Combine.displayName = "Combine"
