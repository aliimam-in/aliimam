
import * as React from "react"

export interface FileWarningProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileWarning = React.forwardRef<SVGSVGElement, FileWarningProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-3 7v4m0 4h.01"/>` }}
      {...props}
    />
  )
)

FileWarning.displayName = "FileWarning"
