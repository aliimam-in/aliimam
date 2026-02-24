
import * as React from "react"

export interface ALargeSmallProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ALargeSmall = React.forwardRef<SVGSVGElement, ALargeSmallProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m15 16l2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16m-6.303-2h5.606M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/>` }}
      {...props}
    />
  )
)

ALargeSmall.displayName = "ALargeSmall"
