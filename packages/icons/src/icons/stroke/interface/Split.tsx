
import * as React from "react"

export interface SplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Split = React.forwardRef<SVGSVGElement, SplitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6"/></g>` }}
      {...props}
    />
  )
)

Split.displayName = "Split"
