
import * as React from "react"

export interface Navigation2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Navigation2 = React.forwardRef<SVGSVGElement, Navigation2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m12 2l7 19l-7-4l-7 4z"/>` }}
      {...props}
    />
  )
)

Navigation2.displayName = "Navigation2"
