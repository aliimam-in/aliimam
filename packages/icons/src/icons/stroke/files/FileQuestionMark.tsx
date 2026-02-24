
import * as React from "react"

export interface FileQuestionMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileQuestionMark = React.forwardRef<SVGSVGElement, FileQuestionMarkProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zm6-5h.01"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/></g>` }}
      {...props}
    />
  )
)

FileQuestionMark.displayName = "FileQuestionMark"
