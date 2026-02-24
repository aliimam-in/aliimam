
import * as React from "react"

export interface FramerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Framer = React.forwardRef<SVGSVGElement, FramerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/>` }}
      {...props}
    />
  )
)

Framer.displayName = "Framer"
