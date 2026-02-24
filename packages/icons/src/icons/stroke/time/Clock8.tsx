
import * as React from "react"

export interface Clock8Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Clock8 = React.forwardRef<SVGSVGElement, Clock8Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4 2"/></g>` }}
      {...props}
    />
  )
)

Clock8.displayName = "Clock8"
