
import * as React from "react"

export interface WifiHighProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WifiHigh = React.forwardRef<SVGSVGElement, WifiHighProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 20h.01M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"/>` }}
      {...props}
    />
  )
)

WifiHigh.displayName = "WifiHigh"
