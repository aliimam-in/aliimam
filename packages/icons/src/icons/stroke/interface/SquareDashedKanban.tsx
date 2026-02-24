
import * as React from "react"

export interface SquareDashedKanbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDashedKanban = React.forwardRef<SVGSVGElement, SquareDashedKanbanProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 7v7m4-7v4m4-4v9M5 3a2 2 0 0 0-2 2m6-2h1m4 0h1m4 0a2 2 0 0 1 2 2m0 4v1m0 4v1m0 4a2 2 0 0 1-2 2m-5 0h1m-6 0h1m-5 0a2 2 0 0 1-2-2m0-5v1m0-6v1"/>` }}
      {...props}
    />
  )
)

SquareDashedKanban.displayName = "SquareDashedKanban"
