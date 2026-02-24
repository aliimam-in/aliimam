
import * as React from "react"

export interface ItalicProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Italic = React.forwardRef<SVGSVGElement, ItalicProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M19 4h-9m4 16H5M15 4L9 20"/>` }}
      {...props}
    />
  )
)

Italic.displayName = "Italic"
