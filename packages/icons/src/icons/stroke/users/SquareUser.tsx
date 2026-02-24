
import * as React from "react"

export interface SquareUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareUser = React.forwardRef<SVGSVGElement, SquareUserProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></g>` }}
      {...props}
    />
  )
)

SquareUser.displayName = "SquareUser"
