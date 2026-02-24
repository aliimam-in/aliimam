
import * as React from "react"

export interface KayakProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Kayak = React.forwardRef<SVGSVGElement, KayakProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2zm2.97-13.39a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61M6.707 6.707l10.586 10.586M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"/>` }}
      {...props}
    />
  )
)

Kayak.displayName = "Kayak"
