
import * as React from "react"

export interface ArrowBigRightDashProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowBigRightDash = React.forwardRef<SVGSVGElement, ArrowBigRightDashProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM4 9v6"/>` }}
      {...props}
    />
  )
)

ArrowBigRightDash.displayName = "ArrowBigRightDash"
