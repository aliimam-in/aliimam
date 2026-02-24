
import * as React from "react"

export interface MoveDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveDownRight = React.forwardRef<SVGSVGElement, MoveDownRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M19 13v6h-6M5 5l14 14"/>` }}
      {...props}
    />
  )
)

MoveDownRight.displayName = "MoveDownRight"
