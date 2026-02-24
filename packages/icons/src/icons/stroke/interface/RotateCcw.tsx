
import * as React from "react"

export interface RotateCcwProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RotateCcw = React.forwardRef<SVGSVGElement, RotateCcwProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></g>` }}
      {...props}
    />
  )
)

RotateCcw.displayName = "RotateCcw"
