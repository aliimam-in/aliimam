
import * as React from "react"

export interface GitlabProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Gitlab = React.forwardRef<SVGSVGElement, GitlabProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m22 13.29l-3.33-10a.4.4 0 0 0-.14-.18a.38.38 0 0 0-.22-.11a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18a.38.38 0 0 0-.26-.08a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"/>` }}
      {...props}
    />
  )
)

Gitlab.displayName = "Gitlab"
