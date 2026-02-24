
import * as React from "react"

export interface SquarePowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquarePower = React.forwardRef<SVGSVGElement, SquarePowerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v4M7.998 9.003a5 5 0 1 0 8-.005"/><rect width="18" height="18" x="3" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

SquarePower.displayName = "SquarePower"
