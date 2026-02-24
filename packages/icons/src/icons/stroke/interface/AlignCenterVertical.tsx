
import * as React from "react"

export interface AlignCenterVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlignCenterVertical = React.forwardRef<SVGSVGElement, AlignCenterVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4m8 6h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1m8 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/>` }}
      {...props}
    />
  )
)

AlignCenterVertical.displayName = "AlignCenterVertical"
