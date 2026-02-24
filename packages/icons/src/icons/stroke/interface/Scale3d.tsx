
import * as React from "react"

export interface Scale3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Scale3d = React.forwardRef<SVGSVGElement, Scale3dProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7v11a1 1 0 0 0 1 1h11m-11.707-.293L11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/></g>` }}
      {...props}
    />
  )
)

Scale3d.displayName = "Scale3d"
