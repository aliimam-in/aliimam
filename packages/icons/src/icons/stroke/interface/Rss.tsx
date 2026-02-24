
import * as React from "react"

export interface RssProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Rss = React.forwardRef<SVGSVGElement, RssProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></g>` }}
      {...props}
    />
  )
)

Rss.displayName = "Rss"
