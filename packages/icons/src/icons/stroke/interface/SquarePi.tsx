
import * as React from "react"

export interface SquarePiProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquarePi = React.forwardRef<SVGSVGElement, SquarePiProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10m-7 0v10m6 0a2 2 0 0 1-2-2V7"/></g>` }}
      {...props}
    />
  )
)

SquarePi.displayName = "SquarePi"
