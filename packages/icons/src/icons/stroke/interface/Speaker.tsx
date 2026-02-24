
import * as React from "react"

export interface SpeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Speaker = React.forwardRef<SVGSVGElement, SpeakerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 6h.01"/><circle cx="12" cy="14" r="4"/><path d="M12 14h.01"/></g>` }}
      {...props}
    />
  )
)

Speaker.displayName = "Speaker"
