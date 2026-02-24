
import * as React from "react"

export interface ShrubProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Shrub = React.forwardRef<SVGSVGElement, ShrubProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5m5 1L12 17"/><path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"/></g>` }}
      {...props}
    />
  )
)

Shrub.displayName = "Shrub"
