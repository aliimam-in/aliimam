
import * as React from "react"

export interface Settings2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Settings2 = React.forwardRef<SVGSVGElement, Settings2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 17H5M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></g>` }}
      {...props}
    />
  )
)

Settings2.displayName = "Settings2"
