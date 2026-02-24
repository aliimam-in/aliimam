
import * as React from "react"

export interface BookmarkXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookmarkX = React.forwardRef<SVGSVGElement, BookmarkXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m14.5 7.5l-5 5M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2zM9.5 7.5l5 5"/>` }}
      {...props}
    />
  )
)

BookmarkX.displayName = "BookmarkX"
