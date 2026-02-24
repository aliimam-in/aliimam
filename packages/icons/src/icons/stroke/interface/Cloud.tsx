
import * as React from "react"

export interface CloudProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cloud = React.forwardRef<SVGSVGElement, CloudProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"/>` }}
      {...props}
    />
  )
)

Cloud.displayName = "Cloud"
