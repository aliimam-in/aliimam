
import * as React from "react"

export interface FerrisWheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FerrisWheel = React.forwardRef<SVGSVGElement, FerrisWheelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m-5.2 9l-3.5 2M20.7 7l-3.5 2M6.8 9L3.3 7m17.4 10l-3.5-2M9 22l3-8l3 8m-7 0h8"/><path d="M18 18.7a9 9 0 1 0-12 0"/></g>` }}
      {...props}
    />
  )
)

FerrisWheel.displayName = "FerrisWheel"
