
import * as React from "react"

export interface SquareMProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareM = React.forwardRef<SVGSVGElement, SquareMProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

SquareM.displayName = "SquareM"
