
import * as React from "react"

export interface ClipboardCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClipboardCheck = React.forwardRef<SVGSVGElement, ClipboardCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14l2 2l4-4"/></g>` }}
      {...props}
    />
  )
)

ClipboardCheck.displayName = "ClipboardCheck"
