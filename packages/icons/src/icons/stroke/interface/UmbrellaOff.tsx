
import * as React from "react"

export interface UmbrellaOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UmbrellaOff = React.forwardRef<SVGSVGElement, UmbrellaOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2m6.656 9h2.336a1 1 0 0 0 .97-1.274a10.284 10.284 0 0 0-12.07-7.51M2 2l20 20"/><path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10"/></g>` }}
      {...props}
    />
  )
)

UmbrellaOff.displayName = "UmbrellaOff"
