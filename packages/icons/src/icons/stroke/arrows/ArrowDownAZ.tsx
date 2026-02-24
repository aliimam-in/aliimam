
import * as React from "react"

export interface ArrowDownAZProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownAZ = React.forwardRef<SVGSVGElement, ArrowDownAZProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 16l4 4l4-4m-4 4V4m13 4h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5"/>` }}
      {...props}
    />
  )
)

ArrowDownAZ.displayName = "ArrowDownAZ"
