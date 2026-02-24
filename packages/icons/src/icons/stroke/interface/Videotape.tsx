
import * as React from "react"

export interface VideotapeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Videotape = React.forwardRef<SVGSVGElement, VideotapeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 8h20"/><circle cx="8" cy="14" r="2"/><path d="M8 12h8"/><circle cx="16" cy="14" r="2"/></g>` }}
      {...props}
    />
  )
)

Videotape.displayName = "Videotape"
