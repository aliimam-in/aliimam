
import * as React from "react"

export interface BarrelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Barrel = React.forwardRef<SVGSVGElement, BarrelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3a41 41 0 0 0 0 18m4-18a41 41 0 0 1 0 18"/><path d="M17 3a2 2 0 0 1 1.68.92a15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92a15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3zM3.84 17h16.32M3.84 7h16.32"/></g>` }}
      {...props}
    />
  )
)

Barrel.displayName = "Barrel"
