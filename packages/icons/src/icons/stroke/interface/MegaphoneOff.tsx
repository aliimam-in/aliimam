
import * as React from "react"

export interface MegaphoneOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MegaphoneOff = React.forwardRef<SVGSVGElement, MegaphoneOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11.636 6A13 13 0 0 0 19.4 3.2A1 1 0 0 1 21 4v11.344m-6.622-.987A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1M2 2l20 20"/><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 8v6"/></g>` }}
      {...props}
    />
  )
)

MegaphoneOff.displayName = "MegaphoneOff"
