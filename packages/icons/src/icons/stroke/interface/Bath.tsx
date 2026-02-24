
import * as React from "react"

export interface BathProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bath = React.forwardRef<SVGSVGElement, BathProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>` }}
      {...props}
    />
  )
)

Bath.displayName = "Bath"
