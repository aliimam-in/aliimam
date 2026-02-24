
import * as React from "react"

export interface PartyPopperProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PartyPopper = React.forwardRef<SVGSVGElement, PartyPopperProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"/></g>` }}
      {...props}
    />
  )
)

PartyPopper.displayName = "PartyPopper"
