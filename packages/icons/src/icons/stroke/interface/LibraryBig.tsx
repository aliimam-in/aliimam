
import * as React from "react"

export interface LibraryBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LibraryBig = React.forwardRef<SVGSVGElement, LibraryBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18m13.4-2.1c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></g>` }}
      {...props}
    />
  )
)

LibraryBig.displayName = "LibraryBig"
