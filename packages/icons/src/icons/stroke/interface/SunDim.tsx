
import * as React from "react"

export interface SunDimProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SunDim = React.forwardRef<SVGSVGElement, SunDimProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01M20 12h.01M12 20h.01M4 12h.01m13.647-5.657h.01m-.01 11.314h.01m-11.324 0h.01m-.01-11.314h.01"/></g>` }}
      {...props}
    />
  )
)

SunDim.displayName = "SunDim"
