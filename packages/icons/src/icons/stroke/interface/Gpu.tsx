
import * as React from "react"

export interface GpuProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Gpu = React.forwardRef<SVGSVGElement, GpuProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 21V3m0 2h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"/><circle cx="16" cy="11" r="2"/><circle cx="8" cy="11" r="2"/></g>` }}
      {...props}
    />
  )
)

Gpu.displayName = "Gpu"
