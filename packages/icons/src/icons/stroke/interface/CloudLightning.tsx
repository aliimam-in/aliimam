
import * as React from "react"

export interface CloudLightningProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudLightning = React.forwardRef<SVGSVGElement, CloudLightningProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12l-3 5h4l-3 5"/></g>` }}
      {...props}
    />
  )
)

CloudLightning.displayName = "CloudLightning"
