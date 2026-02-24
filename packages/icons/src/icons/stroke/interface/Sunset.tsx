
import * as React from "react"

export interface SunsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Sunset = React.forwardRef<SVGSVGElement, SunsetProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 10V2m-7.07 8.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M16 6l-4 4l-4-4m8 12a4 4 0 0 0-8 0"/>` }}
      {...props}
    />
  )
)

Sunset.displayName = "Sunset"
