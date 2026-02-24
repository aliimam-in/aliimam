
import * as React from "react"

export interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowLeft = React.forwardRef<SVGSVGElement, ArrowLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m12 19l-7-7l7-7m7 7H5"/>` }}
      {...props}
    />
  )
)

ArrowLeft.displayName = "ArrowLeft"
