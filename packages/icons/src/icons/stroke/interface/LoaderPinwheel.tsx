
import * as React from "react"

export interface LoaderPinwheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LoaderPinwheel = React.forwardRef<SVGSVGElement, LoaderPinwheelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12a1 1 0 0 1-10 0a1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7a1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6a1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/></g>` }}
      {...props}
    />
  )
)

LoaderPinwheel.displayName = "LoaderPinwheel"
