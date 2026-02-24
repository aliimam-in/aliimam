
import * as React from "react"

export interface FormProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Form = React.forwardRef<SVGSVGElement, FormProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14h6M4 2h10"/><rect width="16" height="4" x="4" y="18" rx="1"/><rect width="16" height="4" x="4" y="6" rx="1"/></g>` }}
      {...props}
    />
  )
)

Form.displayName = "Form"
