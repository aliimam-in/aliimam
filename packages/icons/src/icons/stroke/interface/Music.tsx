
import * as React from "react"

export interface MusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Music = React.forwardRef<SVGSVGElement, MusicProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></g>` }}
      {...props}
    />
  )
)

Music.displayName = "Music"
