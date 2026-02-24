
import * as React from "react"

export interface GalleryHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GalleryHorizontal = React.forwardRef<SVGSVGElement, GalleryHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3v18"/><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M22 3v18"/></g>` }}
      {...props}
    />
  )
)

GalleryHorizontal.displayName = "GalleryHorizontal"
