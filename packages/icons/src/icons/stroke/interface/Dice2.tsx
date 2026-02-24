
import * as React from "react"

export interface Dice2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Dice2 = React.forwardRef<SVGSVGElement, Dice2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M15 9h.01M9 15h.01"/></g>` }}
      {...props}
    />
  )
)

Dice2.displayName = "Dice2"
