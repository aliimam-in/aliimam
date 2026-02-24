
import * as React from "react"

export interface HdProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Hd = React.forwardRef<SVGSVGElement, HdProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12H6m4 3V9m4 5.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5zM6 15V9"/><rect width="20" height="14" x="2" y="5" rx="2"/></g>` }}
      {...props}
    />
  )
)

Hd.displayName = "Hd"
