
import * as React from "react"

export interface SignalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Signal = React.forwardRef<SVGSVGElement, SignalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16"/>` }}
      {...props}
    />
  )
)

Signal.displayName = "Signal"
