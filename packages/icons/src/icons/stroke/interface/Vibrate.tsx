
import * as React from "react"

export interface VibrateProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Vibrate = React.forwardRef<SVGSVGElement, VibrateProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m2 8l2 2l-2 2l2 2l-2 2m20-8l-2 2l2 2l-2 2l2 2"/><rect width="8" height="14" x="8" y="5" rx="1"/></g>` }}
      {...props}
    />
  )
)

Vibrate.displayName = "Vibrate"
