
import * as React from "react"

export interface MicProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Mic = React.forwardRef<SVGSVGElement, MicProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect width="6" height="13" x="9" y="2" rx="3"/></g>` }}
      {...props}
    />
  )
)

Mic.displayName = "Mic"
