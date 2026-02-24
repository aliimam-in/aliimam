
import * as React from "react"

export interface LockKeyholeOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LockKeyholeOpen = React.forwardRef<SVGSVGElement, LockKeyholeOpenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></g>` }}
      {...props}
    />
  )
)

LockKeyholeOpen.displayName = "LockKeyholeOpen"
