
import * as React from "react"

export interface TestTubesProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TestTubes = React.forwardRef<SVGSVGElement, TestTubesProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2m16 0v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2M3 2h7m4 0h7M9 16H4m16 0h-5"/>` }}
      {...props}
    />
  )
)

TestTubes.displayName = "TestTubes"
