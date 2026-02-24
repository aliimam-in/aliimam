
import * as React from "react"

export interface NotebookTabsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NotebookTabs = React.forwardRef<SVGSVGElement, NotebookTabsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2v20m0-15h5m-5 5h5m-5 5h5"/></g>` }}
      {...props}
    />
  )
)

NotebookTabs.displayName = "NotebookTabs"
