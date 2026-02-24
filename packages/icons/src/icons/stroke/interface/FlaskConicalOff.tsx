
import * as React from "react"

export interface FlaskConicalOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlaskConicalOff = React.forwardRef<SVGSVGElement, FlaskConicalOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 2v2.343M14 2v6.343M2 2l20 20m-2-2a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563M6.453 15H15M8.5 2h7"/>` }}
      {...props}
    />
  )
)

FlaskConicalOff.displayName = "FlaskConicalOff"
