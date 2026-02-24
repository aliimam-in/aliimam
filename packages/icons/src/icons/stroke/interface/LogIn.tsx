
import * as React from "react"

export interface LogInProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LogIn = React.forwardRef<SVGSVGElement, LogInProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>` }}
      {...props}
    />
  )
)

LogIn.displayName = "LogIn"
