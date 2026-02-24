
import * as React from "react"

export interface BandageProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bandage = React.forwardRef<SVGSVGElement, BandageProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v12M6 6v12"/><rect width="20" height="12" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

Bandage.displayName = "Bandage"
