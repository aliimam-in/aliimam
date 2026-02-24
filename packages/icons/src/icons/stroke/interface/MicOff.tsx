
import * as React from "react"

export interface MicOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MicOff = React.forwardRef<SVGSVGElement, MicOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19v3m3-12.66V5a3 3 0 0 0-5.68-1.33m7.63 13.28A7 7 0 0 1 5 12v-2m13.89 3.23A7 7 0 0 0 19 12v-2M2 2l20 20"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/></g>` }}
      {...props}
    />
  )
)

MicOff.displayName = "MicOff"
