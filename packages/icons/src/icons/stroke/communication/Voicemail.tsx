
import * as React from "react"

export interface VoicemailProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Voicemail = React.forwardRef<SVGSVGElement, VoicemailProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/></g>` }}
      {...props}
    />
  )
)

Voicemail.displayName = "Voicemail"
