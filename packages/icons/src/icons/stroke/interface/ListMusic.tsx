
import * as React from "react"

export interface ListMusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListMusic = React.forwardRef<SVGSVGElement, ListMusicProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 5H3m8 7H3m8 7H3m18-3V5"/><circle cx="18" cy="16" r="3"/></g>` }}
      {...props}
    />
  )
)

ListMusic.displayName = "ListMusic"
