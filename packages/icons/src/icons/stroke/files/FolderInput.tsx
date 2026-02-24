
import * as React from "react"

export interface FolderInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderInput = React.forwardRef<SVGSVGElement, FolderInputProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1m0-4h10"/><path d="m9 16l3-3l-3-3"/></g>` }}
      {...props}
    />
  )
)

FolderInput.displayName = "FolderInput"
