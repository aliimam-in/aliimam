
import * as React from "react"

export interface PictureInPicture2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PictureInPicture2 = React.forwardRef<SVGSVGElement, PictureInPicture2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></g>` }}
      {...props}
    />
  )
)

PictureInPicture2.displayName = "PictureInPicture2"
