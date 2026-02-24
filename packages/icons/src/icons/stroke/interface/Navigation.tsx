
import * as React from "react"

export interface NavigationProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Navigation = React.forwardRef<SVGSVGElement, NavigationProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 11l19-9l-9 19l-2-8z"/>` }}
      {...props}
    />
  )
)

Navigation.displayName = "Navigation"
