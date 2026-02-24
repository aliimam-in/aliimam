
import * as React from "react"

export interface FishingHookProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FishingHook = React.forwardRef<SVGSVGElement, FishingHookProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m17.586 11.414l-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10m12.414-1.414L22 7"/><circle cx="19" cy="10" r="2"/></g>` }}
      {...props}
    />
  )
)

FishingHook.displayName = "FishingHook"
