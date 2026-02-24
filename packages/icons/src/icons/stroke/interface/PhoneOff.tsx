
import * as React from "react"

export interface PhoneOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PhoneOff = React.forwardRef<SVGSVGElement, PhoneOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.1 13.9a14 14 0 0 0 3.732 2.668a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a18 18 0 0 1-12.728-5.272M22 2L2 22m2.76-8.418A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 .244.473"/>` }}
      {...props}
    />
  )
)

PhoneOff.displayName = "PhoneOff"
