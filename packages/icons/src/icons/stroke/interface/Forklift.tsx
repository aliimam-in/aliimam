
import * as React from "react"

export interface ForkliftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Forklift = React.forwardRef<SVGSVGElement, ForkliftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12H5a2 2 0 0 0-2 2v5m12 0h7m-6 0V2M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828M7 19h4"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

Forklift.displayName = "Forklift"
