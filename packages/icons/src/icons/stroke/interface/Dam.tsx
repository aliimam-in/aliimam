
import * as React from "react"

export interface DamProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Dam = React.forwardRef<SVGSVGElement, DamProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1m-10.25 6c.35.5 1.45 1 2.75 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 10h4m-4 4h4m-4 4h4M2 6h4"/><path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"/></g>` }}
      {...props}
    />
  )
)

Dam.displayName = "Dam"
