
import * as React from "react"

export interface MirrorRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MirrorRound = React.forwardRef<SVGSVGElement, MirrorRoundProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 6.6L8.6 8M12 18v4m3-14.5L9.5 13M7 22h10"/><circle cx="12" cy="10" r="8"/></g>` }}
      {...props}
    />
  )
)

MirrorRound.displayName = "MirrorRound"
