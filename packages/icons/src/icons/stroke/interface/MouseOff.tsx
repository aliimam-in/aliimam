
import * as React from "react"

export interface MouseOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MouseOff = React.forwardRef<SVGSVGElement, MouseOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 6v.343m6.218 11.875A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218M19 13.343V9A7 7 0 0 0 8.56 2.902M22 22L2 2"/>` }}
      {...props}
    />
  )
)

MouseOff.displayName = "MouseOff"
