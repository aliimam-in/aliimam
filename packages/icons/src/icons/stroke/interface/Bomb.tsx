
import * as React from "react"

export interface BombProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bomb = React.forwardRef<SVGSVGElement, BombProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="13" r="9"/><path d="M14.35 4.65L16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95M22 2l-1.5 1.5"/></g>` }}
      {...props}
    />
  )
)

Bomb.displayName = "Bomb"
