
import * as React from "react"

export interface ArrowDownToDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownToDot = React.forwardRef<SVGSVGElement, ArrowDownToDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v14m7-7l-7 7l-7-7"/><circle cx="12" cy="21" r="1"/></g>` }}
      {...props}
    />
  )
)

ArrowDownToDot.displayName = "ArrowDownToDot"
