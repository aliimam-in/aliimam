
import * as React from "react"

export interface MountainSnowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MountainSnow = React.forwardRef<SVGSVGElement, MountainSnowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3l4 8l5-5l5 15H2z"/><path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"/></g>` }}
      {...props}
    />
  )
)

MountainSnow.displayName = "MountainSnow"
