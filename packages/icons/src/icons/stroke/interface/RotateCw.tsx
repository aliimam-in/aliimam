
import * as React from "react"

export interface RotateCwProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RotateCw = React.forwardRef<SVGSVGElement, RotateCwProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></g>` }}
      {...props}
    />
  )
)

RotateCw.displayName = "RotateCw"
