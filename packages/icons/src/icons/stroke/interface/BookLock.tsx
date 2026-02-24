
import * as React from "react"

export interface BookLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookLock = React.forwardRef<SVGSVGElement, BookLockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6V4a2 2 0 1 0-4 0v2m6 9v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"/><rect width="8" height="5" x="12" y="6" rx="1"/></g>` }}
      {...props}
    />
  )
)

BookLock.displayName = "BookLock"
