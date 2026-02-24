
import * as React from "react"

export interface GalleryVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GalleryVertical = React.forwardRef<SVGSVGElement, GalleryVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2h18"/><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 22h18"/></g>` }}
      {...props}
    />
  )
)

GalleryVertical.displayName = "GalleryVertical"
