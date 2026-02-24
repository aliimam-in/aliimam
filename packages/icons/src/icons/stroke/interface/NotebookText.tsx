
import * as React from "react"

export interface NotebookTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NotebookText = React.forwardRef<SVGSVGElement, NotebookTextProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5m-5 4H16m-6.5 4H14"/></g>` }}
      {...props}
    />
  )
)

NotebookText.displayName = "NotebookText"
