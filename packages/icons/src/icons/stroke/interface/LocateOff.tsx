
import * as React from "react"

export interface LocateOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LocateOff = React.forwardRef<SVGSVGElement, LocateOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 19v3m0-20v3m6.89 8.24a7 7 0 0 0-8.13-8.13M19 12h3M2 12h3M2 2l20 20M7.05 7.05a7 7 0 0 0 9.9 9.9"/>` }}
      {...props}
    />
  )
)

LocateOff.displayName = "LocateOff"
