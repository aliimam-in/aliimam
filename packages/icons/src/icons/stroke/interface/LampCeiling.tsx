
import * as React from "react"

export interface LampCeilingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LampCeiling = React.forwardRef<SVGSVGElement, LampCeilingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v5m2.829 8.998a3 3 0 1 1-5.658 0"/><path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"/></g>` }}
      {...props}
    />
  )
)

LampCeiling.displayName = "LampCeiling"
