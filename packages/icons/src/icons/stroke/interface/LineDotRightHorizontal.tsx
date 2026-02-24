
import * as React from "react"

export interface LineDotRightHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LineDotRightHorizontal = React.forwardRef<SVGSVGElement, LineDotRightHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h12"/><circle cx="18" cy="12" r="3"/></g>` }}
      {...props}
    />
  )
)

LineDotRightHorizontal.displayName = "LineDotRightHorizontal"
