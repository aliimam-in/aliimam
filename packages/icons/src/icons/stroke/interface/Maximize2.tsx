
import * as React from "react"

export interface Maximize2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Maximize2 = React.forwardRef<SVGSVGElement, Maximize2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"/>` }}
      {...props}
    />
  )
)

Maximize2.displayName = "Maximize2"
