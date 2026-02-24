
import * as React from "react"

export interface MoonStarProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoonStar = React.forwardRef<SVGSVGElement, MoonStarProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>` }}
      {...props}
    />
  )
)

MoonStar.displayName = "MoonStar"
