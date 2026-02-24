
import * as React from "react"

export interface SeparatorVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SeparatorVertical = React.forwardRef<SVGSVGElement, SeparatorVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 3v18m4-5l4-4l-4-4M8 8l-4 4l4 4"/>` }}
      {...props}
    />
  )
)

SeparatorVertical.displayName = "SeparatorVertical"
