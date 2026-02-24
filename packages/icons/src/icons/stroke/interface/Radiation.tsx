
import * as React from "react"

export interface RadiationProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Radiation = React.forwardRef<SVGSVGElement, RadiationProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 12h.01M14 15.464a4 4 0 0 1-4 0l-2.472 4.282a1 1 0 0 0 .465 1.416a10 10 0 0 0 8.014 0a1 1 0 0 0 .465-1.416zM16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305a10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12zm-8 0a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305a10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"/>` }}
      {...props}
    />
  )
)

Radiation.displayName = "Radiation"
