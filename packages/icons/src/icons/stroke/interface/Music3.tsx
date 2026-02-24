
import * as React from "react"

export interface Music3Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Music3 = React.forwardRef<SVGSVGElement, Music3Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="4"/><path d="M16 18V2"/></g>` }}
      {...props}
    />
  )
)

Music3.displayName = "Music3"
