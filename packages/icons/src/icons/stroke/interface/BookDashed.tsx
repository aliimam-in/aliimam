
import * as React from "react"

export interface BookDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BookDashed = React.forwardRef<SVGSVGElement, BookDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 17h1.5M12 22h1.5M12 2h1.5m4 20H19a1 1 0 0 0 1-1M17.5 2H19a1 1 0 0 1 1 1v1.5m0 9.5v3h-2.5M20 8.5V10M4 10V8.5m0 11V14m0-9.5A2.5 2.5 0 0 1 6.5 2H8m0 20H6.5a1 1 0 0 1 0-5H8"/>` }}
      {...props}
    />
  )
)

BookDashed.displayName = "BookDashed"
