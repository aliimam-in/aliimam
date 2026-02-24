
import * as React from "react"

export interface CircleParkingOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleParkingOff = React.forwardRef<SVGSVGElement, CircleParkingOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12.656 7H13a3 3 0 0 1 2.984 3.307M13 13H9m10.071 6.071A1 1 0 0 1 4.93 4.93M2 2l20 20"/><path d="M8.357 2.687a10 10 0 0 1 12.956 12.956M9 17V9"/></g>` }}
      {...props}
    />
  )
)

CircleParkingOff.displayName = "CircleParkingOff"
