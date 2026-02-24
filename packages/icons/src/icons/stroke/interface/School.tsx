
import * as React from "react"

export interface SchoolProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const School = React.forwardRef<SVGSVGElement, SchoolProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 21v-3a2 2 0 0 0-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11l-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 5v16"/><circle cx="12" cy="9" r="2"/></g>` }}
      {...props}
    />
  )
)

School.displayName = "School"
