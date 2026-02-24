
import * as React from "react"

export interface CherryProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cherry = React.forwardRef<SVGSVGElement, CherryProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3"/><path d="M7 14c3.22-2.91 4.29-8.75 5-12c1.66 2.38 4.94 9 5 12"/><path d="M22 9c-4.29 0-7.14-2.33-10-7c5.71 0 10 4.67 10 7"/></g>` }}
      {...props}
    />
  )
)

Cherry.displayName = "Cherry"
