
import * as React from "react"

export interface UnderlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Underline = React.forwardRef<SVGSVGElement, UnderlineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16"/>` }}
      {...props}
    />
  )
)

Underline.displayName = "Underline"
