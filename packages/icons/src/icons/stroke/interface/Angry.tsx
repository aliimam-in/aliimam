
import * as React from "react"

export interface AngryProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Angry = React.forwardRef<SVGSVGElement, AngryProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2s-4 2-4 2m-.5-8L10 9m4 0l2.5-1M9 10h.01M15 10h.01"/></g>` }}
      {...props}
    />
  )
)

Angry.displayName = "Angry"
