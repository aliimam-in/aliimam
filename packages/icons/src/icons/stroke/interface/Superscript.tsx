
import * as React from "react"

export interface SuperscriptProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Superscript = React.forwardRef<SVGSVGElement, SuperscriptProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m4 19l8-8m0 8l-8-8m16 1h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"/>` }}
      {...props}
    />
  )
)

Superscript.displayName = "Superscript"
