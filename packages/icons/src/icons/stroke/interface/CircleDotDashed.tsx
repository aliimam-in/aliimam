
import * as React from "react"

export interface CircleDotDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleDotDashed = React.forwardRef<SVGSVGElement, CircleDotDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></g>` }}
      {...props}
    />
  )
)

CircleDotDashed.displayName = "CircleDotDashed"
