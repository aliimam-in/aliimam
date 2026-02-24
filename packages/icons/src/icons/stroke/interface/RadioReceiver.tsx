
import * as React from "react"

export interface RadioReceiverProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RadioReceiver = React.forwardRef<SVGSVGElement, RadioReceiverProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 16v2m14-2v2"/><rect width="20" height="8" x="2" y="8" rx="2"/><path d="M18 12h.01"/></g>` }}
      {...props}
    />
  )
)

RadioReceiver.displayName = "RadioReceiver"
