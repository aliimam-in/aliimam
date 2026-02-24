
import * as React from "react"

export interface CloudAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudAlert = React.forwardRef<SVGSVGElement, CloudAlertProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 12v4m0 4h.01m-3.882-3.051A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"/>` }}
      {...props}
    />
  )
)

CloudAlert.displayName = "CloudAlert"
