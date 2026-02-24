
import * as React from "react"

export interface CodepenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Codepen = React.forwardRef<SVGSVGElement, CodepenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2l10 6.5v7L12 22L2 15.5v-7zm0 20v-6.5"/><path d="m22 8.5l-10 7l-10-7"/><path d="m2 15.5l10-7l10 7M12 2v6.5"/></g>` }}
      {...props}
    />
  )
)

Codepen.displayName = "Codepen"
