
import * as React from "react"

export interface SquareDashedMousePointerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDashedMousePointer = React.forwardRef<SVGSVGElement, SquareDashedMousePointerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h2m3-18h1M3 9v1m18-1v2M3 14v1"/>` }}
      {...props}
    />
  )
)

SquareDashedMousePointer.displayName = "SquareDashedMousePointer"
