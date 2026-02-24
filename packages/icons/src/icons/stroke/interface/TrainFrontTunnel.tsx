
import * as React from "react"

export interface TrainFrontTunnelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TrainFrontTunnel = React.forwardRef<SVGSVGElement, TrainFrontTunnelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22V12a10 10 0 1 1 20 0v10"/><path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8m1 8.2h.01M14 15h.01"/><path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Zm-1 0l-2 3m8-3l2 3"/></g>` }}
      {...props}
    />
  )
)

TrainFrontTunnel.displayName = "TrainFrontTunnel"
