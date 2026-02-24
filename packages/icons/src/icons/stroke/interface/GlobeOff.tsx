
import * as React from "react"

export interface GlobeOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GlobeOff = React.forwardRef<SVGSVGElement, GlobeOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643m-5.756-.087A14.5 14.5 0 0 1 12 22A10 10 0 0 1 4.929 4.929"/><path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687M17.656 12H22m-2.929 7.071A10 10 0 0 1 12 22A14.5 14.5 0 0 1 8.44 8.45M2 12h10M2 2l20 20"/></g>` }}
      {...props}
    />
  )
)

GlobeOff.displayName = "GlobeOff"
