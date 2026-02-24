
import * as React from "react"

export interface MoveDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveDownLeft = React.forwardRef<SVGSVGElement, MoveDownLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11 19H5v-6m14-8L5 19"/>` }}
      {...props}
    />
  )
)

MoveDownLeft.displayName = "MoveDownLeft"
