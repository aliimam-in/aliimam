
import * as React from "react"

export interface CaseLowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CaseLower = React.forwardRef<SVGSVGElement, CaseLowerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 9v7m4-10v10"/><circle cx="17.5" cy="12.5" r="3.5"/><circle cx="6.5" cy="12.5" r="3.5"/></g>` }}
      {...props}
    />
  )
)

CaseLower.displayName = "CaseLower"
