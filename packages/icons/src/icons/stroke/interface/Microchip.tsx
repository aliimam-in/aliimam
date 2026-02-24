
import * as React from "react"

export interface MicrochipProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Microchip = React.forwardRef<SVGSVGElement, MicrochipProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect width="12" height="20" x="6" y="2" rx="2"/></g>` }}
      {...props}
    />
  )
)

Microchip.displayName = "Microchip"
