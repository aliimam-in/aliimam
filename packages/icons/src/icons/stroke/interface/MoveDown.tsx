
import * as React from "react"

export interface MoveDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveDown = React.forwardRef<SVGSVGElement, MoveDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m8 18l4 4l4-4M12 2v20"/>` }}
      {...props}
    />
  )
)

MoveDown.displayName = "MoveDown"
