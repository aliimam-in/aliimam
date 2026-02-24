
import * as React from "react"

export interface SunriseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Sunrise = React.forwardRef<SVGSVGElement, SunriseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v8m-7.07.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M8 6l4-4l4 4m0 12a4 4 0 0 0-8 0"/>` }}
      {...props}
    />
  )
)

Sunrise.displayName = "Sunrise"
