
import * as React from "react"

export interface CloudSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudSync = React.forwardRef<SVGSVGElement, CloudSyncProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m17 18l-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M17 22v-4h-4m7.996-2.749A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"/><path d="M7 10v4h4"/><path d="m7 14l1.535-1.605a5 5 0 0 1 8 1.5"/></g>` }}
      {...props}
    />
  )
)

CloudSync.displayName = "CloudSync"
