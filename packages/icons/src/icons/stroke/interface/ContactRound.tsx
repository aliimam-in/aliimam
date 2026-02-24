
import * as React from "react"

export interface ContactRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ContactRound = React.forwardRef<SVGSVGElement, ContactRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 2v2m1.915 18a6 6 0 0 0-12 0M8 2v2"/><circle cx="12" cy="12" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/></g>` }}
      {...props}
    />
  )
)

ContactRound.displayName = "ContactRound"
