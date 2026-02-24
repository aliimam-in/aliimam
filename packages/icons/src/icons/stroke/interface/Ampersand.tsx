
import * as React from "react"

export interface AmpersandProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ampersand = React.forwardRef<SVGSVGElement, AmpersandProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 12h3m-1.5 0a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"/>` }}
      {...props}
    />
  )
)

Ampersand.displayName = "Ampersand"
