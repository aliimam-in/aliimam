
import * as React from "react"

export interface BookCopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookCopy = React.forwardRef<SVGSVGElement, BookCopyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7a2 2 0 0 0-2 2v11"/><path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21m-6-6V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"/></g>` }}
      {...props}
    />
  )
)

BookCopy.displayName = "BookCopy"
