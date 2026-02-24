
import * as React from "react"

export interface UmbrellaProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Umbrella = React.forwardRef<SVGSVGElement, UmbrellaProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2"/><path d="M20.992 13a1 1 0 0 0 .97-1.274a10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"/></g>` }}
      {...props}
    />
  )
)

Umbrella.displayName = "Umbrella"
