
import * as React from "react"

export interface CandyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Candy = React.forwardRef<SVGSVGElement, CandyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 7v10.9m4-11.8V17m2-10V3a1 1 0 0 1 1.707-.707a2.5 2.5 0 0 0 2.152.717a1 1 0 0 1 1.131 1.131a2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"/><path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07a5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"/><path d="M8 17v4a1 1 0 0 1-1.707.707a2.5 2.5 0 0 0-2.152-.717a1 1 0 0 1-1.131-1.131a2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/></g>` }}
      {...props}
    />
  )
)

Candy.displayName = "Candy"
