
import * as React from "react"

export interface WavesLadderProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WavesLadder = React.forwardRef<SVGSVGElement, WavesLadderProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M7 13h10M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></g>` }}
      {...props}
    />
  )
)

WavesLadder.displayName = "WavesLadder"
