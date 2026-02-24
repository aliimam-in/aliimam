
import * as React from "react"

export interface ArrowDownNarrowWideProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDownNarrowWide = React.forwardRef<SVGSVGElement, ArrowDownNarrowWideProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 16l4 4l4-4m-4 4V4m4 0h4m-4 4h7m-7 4h10"/>` }}
      {...props}
    />
  )
)

ArrowDownNarrowWide.displayName = "ArrowDownNarrowWide"
