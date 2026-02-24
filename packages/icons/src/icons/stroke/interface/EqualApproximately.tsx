
import * as React from "react"

export interface EqualApproximatelyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EqualApproximately = React.forwardRef<SVGSVGElement, EqualApproximatelyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 15a6.5 6.5 0 0 1 7 0a6.5 6.5 0 0 0 7 0M5 9a6.5 6.5 0 0 1 7 0a6.5 6.5 0 0 0 7 0"/>` }}
      {...props}
    />
  )
)

EqualApproximately.displayName = "EqualApproximately"
