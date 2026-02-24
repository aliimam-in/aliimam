
import * as React from "react"

export interface PaperProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Paper = React.forwardRef<SVGSVGElement, PaperProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" 
      dangerouslySetInnerHTML={{ __html: `<path d='M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z' fill='#81ADEC'/>` }}
      {...props}
    />
  )
)

Paper.displayName = "Paper"
