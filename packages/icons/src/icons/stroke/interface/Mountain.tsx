
import * as React from "react"

export interface MountainProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Mountain = React.forwardRef<SVGSVGElement, MountainProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m8 3l4 8l5-5l5 15H2z"/>` }}
      {...props}
    />
  )
)

Mountain.displayName = "Mountain"
