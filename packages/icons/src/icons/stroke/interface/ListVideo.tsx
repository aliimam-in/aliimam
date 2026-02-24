
import * as React from "react"

export interface ListVideoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListVideo = React.forwardRef<SVGSVGElement, ListVideoProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 5H3m7 7H3m7 7H3m12-6.997a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/>` }}
      {...props}
    />
  )
)

ListVideo.displayName = "ListVideo"
