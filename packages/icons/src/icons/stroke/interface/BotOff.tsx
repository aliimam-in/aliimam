
import * as React from "react"

export interface BotOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BotOff = React.forwardRef<SVGSVGElement, BotOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13.67 8H18a2 2 0 0 1 2 2v4.33M2 14h2m16 0h2m0 8L2 2m6 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586M9 13v2m.67-11H12v2.33"/>` }}
      {...props}
    />
  )
)

BotOff.displayName = "BotOff"
