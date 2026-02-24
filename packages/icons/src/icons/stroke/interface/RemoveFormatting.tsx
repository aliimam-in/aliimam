
import * as React from "react"

export interface RemoveFormattingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RemoveFormatting = React.forwardRef<SVGSVGElement, RemoveFormattingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"/>` }}
      {...props}
    />
  )
)

RemoveFormatting.displayName = "RemoveFormatting"
