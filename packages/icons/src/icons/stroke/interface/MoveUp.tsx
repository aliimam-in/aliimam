
import * as React from "react"

export interface MoveUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveUp = React.forwardRef<SVGSVGElement, MoveUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m8 6l4-4l4 4m-4-4v20"/>` }}
      {...props}
    />
  )
)

MoveUp.displayName = "MoveUp"
