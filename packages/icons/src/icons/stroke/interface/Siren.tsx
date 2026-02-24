
import * as React from "react"

export interface SirenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Siren = React.forwardRef<SVGSVGElement, SirenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M7 18v-6a5 5 0 1 1 10 0v6M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2zm16-9h1m-3.5-7.5L18 5M2 12h1m9-10v1M4.929 4.929l.707.707M12 12v6"/>` }}
      {...props}
    />
  )
)

Siren.displayName = "Siren"
