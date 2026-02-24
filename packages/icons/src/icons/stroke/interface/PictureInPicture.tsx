
import * as React from "react"

export interface PictureInPictureProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PictureInPicture = React.forwardRef<SVGSVGElement, PictureInPictureProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10h6V4M2 4l6 6m13 0V7a2 2 0 0 0-2-2h-7m-9 9v2a2 2 0 0 0 2 2h3"/><rect width="10" height="7" x="12" y="14" rx="1"/></g>` }}
      {...props}
    />
  )
)

PictureInPicture.displayName = "PictureInPicture"
