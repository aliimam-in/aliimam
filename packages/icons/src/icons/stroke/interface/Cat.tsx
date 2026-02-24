
import * as React from "react"

export interface CatProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cat = React.forwardRef<SVGSVGElement, CatProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5"/><path d="M11.25 16.25h1.5L12 17z"/></g>` }}
      {...props}
    />
  )
)

Cat.displayName = "Cat"
