
import * as React from "react"

export interface PenOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PenOff = React.forwardRef<SVGSVGElement, PenOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m10 10l-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81l4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M2 2l20 20"/>` }}
      {...props}
    />
  )
)

PenOff.displayName = "PenOff"
