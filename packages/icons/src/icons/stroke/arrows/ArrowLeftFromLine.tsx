
import * as React from "react"

export interface ArrowLeftFromLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowLeftFromLine = React.forwardRef<SVGSVGElement, ArrowLeftFromLineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m9 6l-6 6l6 6m-6-6h14m4 7V5"/>` }}
      {...props}
    />
  )
)

ArrowLeftFromLine.displayName = "ArrowLeftFromLine"
