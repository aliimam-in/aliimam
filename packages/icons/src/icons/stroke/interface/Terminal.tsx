
import * as React from "react"

export interface TerminalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Terminal = React.forwardRef<SVGSVGElement, TerminalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 19h8M4 17l6-6l-6-6"/>` }}
      {...props}
    />
  )
)

Terminal.displayName = "Terminal"
