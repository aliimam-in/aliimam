
import * as React from "react"

export interface LibraryProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Library = React.forwardRef<SVGSVGElement, LibraryProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 6l4 14M12 6v14M8 8v12M4 4v16"/>` }}
      {...props}
    />
  )
)

Library.displayName = "Library"
