
import * as React from "react"

export interface LoaderCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LoaderCircle = React.forwardRef<SVGSVGElement, LoaderCircleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"/>` }}
      {...props}
    />
  )
)

LoaderCircle.displayName = "LoaderCircle"
