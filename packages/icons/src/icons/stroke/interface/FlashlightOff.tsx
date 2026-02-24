
import * as React from "react"

export interface FlashlightOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlashlightOff = React.forwardRef<SVGSVGElement, FlashlightOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11.652 6H18m-6 7v1m4 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6M2 2l20 20M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007"/>` }}
      {...props}
    />
  )
)

FlashlightOff.displayName = "FlashlightOff"
