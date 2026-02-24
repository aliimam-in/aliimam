
import * as React from "react"

export interface CloudDownloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CloudDownload = React.forwardRef<SVGSVGElement, CloudDownloadProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 13v8l-4-4m4 4l4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></g>` }}
      {...props}
    />
  )
)

CloudDownload.displayName = "CloudDownload"
