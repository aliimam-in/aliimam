
import * as React from "react"

export interface AlignStartVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignStartVertical = React.forwardRef<SVGSVGElement, AlignStartVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/></g>` }}
      {...props}
    />
  )
)

AlignStartVertical.displayName = "AlignStartVertical"
