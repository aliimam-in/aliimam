
import * as React from "react"

export interface TestTubeDiagonalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TestTubeDiagonal = React.forwardRef<SVGSVGElement, TestTubeDiagonalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 7L6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3m-1-1l6 6m-10 8H4"/>` }}
      {...props}
    />
  )
)

TestTubeDiagonal.displayName = "TestTubeDiagonal"
