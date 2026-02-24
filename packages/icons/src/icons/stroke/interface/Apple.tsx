
import * as React from "react"

export interface AppleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Apple = React.forwardRef<SVGSVGElement, AppleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></g>` }}
      {...props}
    />
  )
)

Apple.displayName = "Apple"
