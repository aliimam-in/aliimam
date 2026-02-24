
import * as React from "react"

export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDown = React.forwardRef<SVGSVGElement, ArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 5v14m7-7l-7 7l-7-7"/>` }}
      {...props}
    />
  )
)

ArrowDown.displayName = "ArrowDown"
