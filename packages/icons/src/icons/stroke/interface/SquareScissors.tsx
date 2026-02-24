
import * as React from "react"

export interface SquareScissorsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareScissors = React.forwardRef<SVGSVGElement, SquareScissorsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M9.561 9.561L12 12m5 5l-2.18-2.18"/><circle cx="8.5" cy="15.5" r="1.5"/><path d="M9.561 14.439L17 7"/></g>` }}
      {...props}
    />
  )
)

SquareScissors.displayName = "SquareScissors"
