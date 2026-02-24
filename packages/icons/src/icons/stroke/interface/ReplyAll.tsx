
import * as React from "react"

export interface ReplyAllProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReplyAll = React.forwardRef<SVGSVGElement, ReplyAllProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m12 17l-5-5l5-5"/><path d="M22 18v-2a4 4 0 0 0-4-4H7m0 5l-5-5l5-5"/></g>` }}
      {...props}
    />
  )
)

ReplyAll.displayName = "ReplyAll"
