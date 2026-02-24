
import * as React from "react"

export interface NonBinaryProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NonBinary = React.forwardRef<SVGSVGElement, NonBinaryProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10M8.5 4l7 4m-7 0l7-4"/><circle cx="12" cy="17" r="5"/></g>` }}
      {...props}
    />
  )
)

NonBinary.displayName = "NonBinary"
