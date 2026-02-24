
import * as React from "react"

export interface HamProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ham = React.forwardRef<SVGSVGElement, HamProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"/><path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288m3.421-10.709L18.6 8.4a2.501 2.501 0 1 0 1.65-4.65a2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025M8.5 16.5l-1-1"/></g>` }}
      {...props}
    />
  )
)

Ham.displayName = "Ham"
