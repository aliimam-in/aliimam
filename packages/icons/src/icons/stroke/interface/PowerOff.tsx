
import * as React from "react"

export interface PowerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PowerOff = React.forwardRef<SVGSVGElement, PowerOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18.36 6.64A9 9 0 0 1 20.77 15M6.16 6.16a9 9 0 1 0 12.68 12.68M12 2v4M2 2l20 20"/>` }}
      {...props}
    />
  )
)

PowerOff.displayName = "PowerOff"
