
import * as React from "react"

export interface MergeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Merge = React.forwardRef<SVGSVGElement, MergeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m8 6l4-4l4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0l-5-5"/></g>` }}
      {...props}
    />
  )
)

Merge.displayName = "Merge"
