
import * as React from "react"

export interface TestTubeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TestTube = React.forwardRef<SVGSVGElement, TestTubeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2m-1 0h7m-1 14h-5"/>` }}
      {...props}
    />
  )
)

TestTube.displayName = "TestTube"
