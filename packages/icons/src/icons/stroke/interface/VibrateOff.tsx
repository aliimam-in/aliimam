
import * as React from "react"

export interface VibrateOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const VibrateOff = React.forwardRef<SVGSVGElement, VibrateOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m2 8l2 2l-2 2l2 2l-2 2m20-8l-2 2l2 2l-2 2l2 2M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2m0-5.66V6c0-.55-.45-1-1-1h-4.34M2 2l20 20"/>` }}
      {...props}
    />
  )
)

VibrateOff.displayName = "VibrateOff"
