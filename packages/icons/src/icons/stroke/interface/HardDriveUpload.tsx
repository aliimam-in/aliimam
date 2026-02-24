
import * as React from "react"

export interface HardDriveUploadProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HardDriveUpload = React.forwardRef<SVGSVGElement, HardDriveUploadProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m16 6l-4-4l-4 4m4-4v8"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01M10 18h.01"/></g>` }}
      {...props}
    />
  )
)

HardDriveUpload.displayName = "HardDriveUpload"
