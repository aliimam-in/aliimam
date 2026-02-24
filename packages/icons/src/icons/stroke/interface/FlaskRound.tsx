
import * as React from "react"

export interface FlaskRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlaskRound = React.forwardRef<SVGSVGElement, FlaskRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7"/>` }}
      {...props}
    />
  )
)

FlaskRound.displayName = "FlaskRound"
