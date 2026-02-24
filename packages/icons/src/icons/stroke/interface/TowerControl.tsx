
import * as React from "react"

export interface TowerControlProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TowerControl = React.forwardRef<SVGSVGElement, TowerControlProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18.2 12.27L20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73ZM8 13v9m8 0v-9M9 6l1 7m5-7l-1 7m-2-7V2m1 0h-2"/>` }}
      {...props}
    />
  )
)

TowerControl.displayName = "TowerControl"
