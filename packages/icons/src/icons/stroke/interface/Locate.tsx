
import * as React from "react"

export interface LocateProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Locate = React.forwardRef<SVGSVGElement, LocateProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h3m14 0h3M12 2v3m0 14v3"/><circle cx="12" cy="12" r="7"/></g>` }}
      {...props}
    />
  )
)

Locate.displayName = "Locate"
