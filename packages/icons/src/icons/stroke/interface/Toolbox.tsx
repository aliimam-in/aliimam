
import * as React from "react"

export interface ToolboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Toolbox = React.forwardRef<SVGSVGElement, ToolboxProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 12v4m0-10a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6zm0 0V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m-6 8h20M8 12v4"/>` }}
      {...props}
    />
  )
)

Toolbox.displayName = "Toolbox"
