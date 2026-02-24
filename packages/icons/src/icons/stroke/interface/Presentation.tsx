
import * as React from "react"

export interface PresentationProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Presentation = React.forwardRef<SVGSVGElement, PresentationProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18l5-5l5 5"/>` }}
      {...props}
    />
  )
)

Presentation.displayName = "Presentation"
