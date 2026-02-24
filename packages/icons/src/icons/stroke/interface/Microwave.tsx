
import * as React from "react"

export interface MicrowaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Microwave = React.forwardRef<SVGSVGElement, MicrowaveProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="15" x="2" y="4" rx="2"/><rect width="8" height="7" x="6" y="8" rx="1"/><path d="M18 8v7M6 19v2m12-2v2"/></g>` }}
      {...props}
    />
  )
)

Microwave.displayName = "Microwave"
