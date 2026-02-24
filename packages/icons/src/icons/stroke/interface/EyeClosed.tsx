
import * as React from "react"

export interface EyeClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EyeClosed = React.forwardRef<SVGSVGElement, EyeClosedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m15 18l-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25"/>` }}
      {...props}
    />
  )
)

EyeClosed.displayName = "EyeClosed"
