
import * as React from "react"

export interface UtilityPoleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UtilityPole = React.forwardRef<SVGSVGElement, UtilityPoleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0l-7 7l-7-7"/>` }}
      {...props}
    />
  )
)

UtilityPole.displayName = "UtilityPole"
