
import * as React from "react"

export interface AtSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AtSign = React.forwardRef<SVGSVGElement, AtSignProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></g>` }}
      {...props}
    />
  )
)

AtSign.displayName = "AtSign"
