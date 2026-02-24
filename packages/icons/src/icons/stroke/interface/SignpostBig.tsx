
import * as React from "react"

export interface SignpostBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SignpostBig = React.forwardRef<SVGSVGElement, SignpostBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 9H4L2 7l2-2h6m4 0h6l2 2l-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8"/>` }}
      {...props}
    />
  )
)

SignpostBig.displayName = "SignpostBig"
