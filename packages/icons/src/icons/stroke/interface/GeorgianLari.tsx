
import * as React from "react"

export interface GeorgianLariProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GeorgianLari = React.forwardRef<SVGSVGElement, GeorgianLariProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11.5 21a7.5 7.5 0 1 1 7.35-9M13 12V3M4 21h16M9 12V3"/>` }}
      {...props}
    />
  )
)

GeorgianLari.displayName = "GeorgianLari"
