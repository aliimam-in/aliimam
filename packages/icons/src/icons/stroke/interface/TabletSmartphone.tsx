
import * as React from "react"

export interface TabletSmartphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TabletSmartphone = React.forwardRef<SVGSVGElement, TabletSmartphoneProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4M8 18h.01"/></g>` }}
      {...props}
    />
  )
)

TabletSmartphone.displayName = "TabletSmartphone"
