
import * as React from "react"

export interface EggOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EggOff = React.forwardRef<SVGSVGElement, EggOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m2 2l20 20m-2-7.653V14c0-6-4-12-8-12c-1.078 0-2.157.436-3.157 1.19M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"/>` }}
      {...props}
    />
  )
)

EggOff.displayName = "EggOff"
