
import * as React from "react"

export interface SmilePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SmilePlus = React.forwardRef<SVGSVGElement, SmilePlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6"/></g>` }}
      {...props}
    />
  )
)

SmilePlus.displayName = "SmilePlus"
