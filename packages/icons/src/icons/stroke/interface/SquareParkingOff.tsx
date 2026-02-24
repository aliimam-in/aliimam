
import * as React from "react"

export interface SquareParkingOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareParkingOff = React.forwardRef<SVGSVGElement, SquareParkingOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41M3 8.7V19a2 2 0 0 0 2 2h10.3M2 2l20 20"/><path d="M13 13a3 3 0 1 0 0-6H9v2m0 8v-2.3"/></g>` }}
      {...props}
    />
  )
)

SquareParkingOff.displayName = "SquareParkingOff"
