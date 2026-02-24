
import * as React from "react"

export interface LeafyGreenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LeafyGreen = React.forwardRef<SVGSVGElement, LeafyGreenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5a4 4 0 0 0 6.187-2.353a3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8A3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373a3.5 3.5 0 0 0-5.116 3.69a4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1C3.926 19.743 3.014 20.732 2 22m0 0L17 7"/>` }}
      {...props}
    />
  )
)

LeafyGreen.displayName = "LeafyGreen"
