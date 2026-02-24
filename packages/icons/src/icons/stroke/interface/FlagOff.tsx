
import * as React from "react"

export interface FlagOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlagOff = React.forwardRef<SVGSVGElement, FlagOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528M2 2l20 20M4 22V4m3.656-2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347"/>` }}
      {...props}
    />
  )
)

FlagOff.displayName = "FlagOff"
