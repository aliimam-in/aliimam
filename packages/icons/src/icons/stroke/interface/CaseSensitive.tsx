
import * as React from "react"

export interface CaseSensitiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CaseSensitive = React.forwardRef<SVGSVGElement, CaseSensitiveProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m11-7v7M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/></g>` }}
      {...props}
    />
  )
)

CaseSensitive.displayName = "CaseSensitive"
