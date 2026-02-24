
import * as React from "react"

export interface Dice4Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Dice4 = React.forwardRef<SVGSVGElement, Dice4Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01"/></g>` }}
      {...props}
    />
  )
)

Dice4.displayName = "Dice4"
