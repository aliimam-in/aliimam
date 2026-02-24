
import * as React from "react"

export interface WifiSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WifiSync = React.forwardRef<SVGSVGElement, WifiSyncProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5m-9.535.105h4m2 4h4L20.43 19.71a5 5 0 0 1-8-1.5M2 8.82a15 15 0 0 1 20 0m-.035 13.285v-4M5 12.86a10 10 0 0 1 3-2.032m.5 5.601h.01"/>` }}
      {...props}
    />
  )
)

WifiSync.displayName = "WifiSync"
