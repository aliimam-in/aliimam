
import * as React from "react"

export interface BookKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookKey = React.forwardRef<SVGSVGElement, BookKeyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15M17 2v6m0-4h2"/><path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="17" cy="10" r="2"/></g>` }}
      {...props}
    />
  )
)

BookKey.displayName = "BookKey"
