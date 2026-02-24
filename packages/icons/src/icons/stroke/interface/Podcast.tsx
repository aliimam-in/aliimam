
import * as React from "react"

export interface PodcastProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Podcast = React.forwardRef<SVGSVGElement, PodcastProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path fill="currentColor" d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 0 0 1 0z"/><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1" fill="currentColor"/></g>` }}
      {...props}
    />
  )
)

Podcast.displayName = "Podcast"
