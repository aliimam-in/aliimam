
import * as React from "react"

export interface HatGlassesProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HatGlasses = React.forwardRef<SVGSVGElement, HatGlassesProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18a2 2 0 0 0-4 0m9-7l-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11m-3 0h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

HatGlasses.displayName = "HatGlasses"
