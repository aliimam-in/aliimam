
import * as React from "react"

export interface AnchorProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Anchor = React.forwardRef<SVGSVGElement, AnchorProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v16m7-9l2-1a9 9 0 0 1-18 0l2 1m4-2h6"/><circle cx="12" cy="4" r="2"/></g>` }}
      {...props}
    />
  )
)

Anchor.displayName = "Anchor"
