
import * as React from "react"

export interface LockOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LockOpen = React.forwardRef<SVGSVGElement, LockOpenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></g>` }}
      {...props}
    />
  )
)

LockOpen.displayName = "LockOpen"
