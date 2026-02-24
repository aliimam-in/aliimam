
import * as React from "react"

export interface AArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AArrowUp = React.forwardRef<SVGSVGElement, AArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m14 11l4-4l4 4m-4 5V7M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/>` }}
      {...props}
    />
  )
)

AArrowUp.displayName = "AArrowUp"
