
import * as React from "react"

export interface PilcrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PilcrowLeft = React.forwardRef<SVGSVGElement, PilcrowLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2l4-4m0 8l-4-4"/>` }}
      {...props}
    />
  )
)

PilcrowLeft.displayName = "PilcrowLeft"
