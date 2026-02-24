
import * as React from "react"

export interface ClosedCaptionProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClosedCaption = React.forwardRef<SVGSVGElement, ClosedCaptionProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 9.17a3 3 0 1 0 0 5.66m7-5.66a3 3 0 1 0 0 5.66"/><rect width="20" height="14" x="2" y="5" rx="2"/></g>` }}
      {...props}
    />
  )
)

ClosedCaption.displayName = "ClosedCaption"
