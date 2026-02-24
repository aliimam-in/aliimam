
import * as React from "react"

export interface OmegaProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Omega = React.forwardRef<SVGSVGElement, OmegaProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437a8 8 0 1 1 8.494-.001a.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"/>` }}
      {...props}
    />
  )
)

Omega.displayName = "Omega"
