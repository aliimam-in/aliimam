
import * as React from "react"

export interface CardSimProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CardSim = React.forwardRef<SVGSVGElement, CardSimProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14v4m2.172-16a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 14h8"/><rect width="8" height="8" x="8" y="10" rx="1"/></g>` }}
      {...props}
    />
  )
)

CardSim.displayName = "CardSim"
