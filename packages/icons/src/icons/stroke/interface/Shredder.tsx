
import * as React from "react"

export interface ShredderProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Shredder = React.forwardRef<SVGSVGElement, ShredderProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5M10 22v-5m4 2v-2m4 3v-3M2 13h20M6 20v-3"/></g>` }}
      {...props}
    />
  )
)

Shredder.displayName = "Shredder"
