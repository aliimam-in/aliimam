
import * as React from "react"

export interface TvProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tv = React.forwardRef<SVGSVGElement, TvProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m17 2l-5 5l-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/></g>` }}
      {...props}
    />
  )
)

Tv.displayName = "Tv"
